import { CharDescriptor, CharKind } from "./chars";
import { Ast, AstMode, AstNodes, createAstTemplateIndexNode, createAstTemplatePropertyNode, createAstTextNode } from "./ast";
import { getCharDescriptor } from "./utils";

/**
 * Parses a string and returns its AST representation.
 * @category AST
 *
 * @param value - The string input to parse.
 * @returns The parsed AST.
 * @throws If the input string cannot be parsed into a valid AST.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function parseAst (value: string): Ast {
  const splittedValue: string[] = value.split("");

  if (splittedValue.length === 0)
    throw new Error("Error processing a zero length data sequence");

  const astNodes: AstNodes = [];

  let sequence: string | null = null;
  let lastCharKind: CharKind | null = null;
  let detectedAstMode: AstMode | null = null;

  splittedValue.forEach((char: string, index: number): void => {
    const charDescriptor: CharDescriptor | null = getCharDescriptor(char);

    // Got a char so just append it
    if (charDescriptor === null) {
      sequence === null ? sequence = char : sequence += char;

      if (index === splittedValue.length - 1) {
        astNodes.push(
          createAstTextNode(sequence)
        );
        sequence = null;
      }


      return;
    }

    // Got a char descriptor, so handle it
    switch (charDescriptor.kind) {
      case CharKind.START: {
        // When no char kind ended before start char kind then its a syntax error
        if (lastCharKind !== null && lastCharKind !== CharKind.END)
          throw new Error(`Expected an end char kind, but got a start char kind at index ${ index } instead`);

        if (sequence !== null) {
          astNodes.push(
            createAstTextNode(sequence)
          );
          sequence = null;
        }

        break;
      }

      case CharKind.END: {
        // When no property inside text is found, char kinds job is not fullfilled
        if (sequence === null)
          throw new Error(`Unexpected end at index ${ index }. Expected a index or keyword property`);

        // End char kind is only possible when start char kind was the previous char kind
        if (lastCharKind !== CharKind.START)
          throw new Error(`Expected start char kind to be ${ CharKind.START }, but got ${ lastCharKind } instead`);

        const indexSequence: number = Number(sequence);
        const nodeAstMode: AstMode = Number.isNaN(indexSequence) ? "property" : "index";

        // If current template variable is based differently than detected ast mode its a syntax error
        if (detectedAstMode !== null && detectedAstMode !== nodeAstMode)
          throw new Error(`Expected to have only ${ detectedAstMode }-based template variables, but got a ${ nodeAstMode }-based instead`);

        detectedAstMode ??= nodeAstMode;
        astNodes.push(
          detectedAstMode === "index"
            ? createAstTemplateIndexNode(indexSequence)
            : createAstTemplatePropertyNode(sequence)
        );
        sequence = null;

        break;
      }
    }

    lastCharKind = charDescriptor.kind;
  });

  // When ast mode could not be detected, then why is someone using this on a value only char sequence?
  if (detectedAstMode === null)
    throw new Error(`Expected template to have at least 1 index- or property-based variable`);

  return {
    mode: detectedAstMode,
    nodes: astNodes
  };
}

export {
  parseAst
};
