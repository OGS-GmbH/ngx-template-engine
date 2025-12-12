import { Ast, AstKind, AstNode, AstTemplatePropertyNode, AstTextNode, AstTemplateIndexNode } from "./ast";
import { isObject } from "./utils";

/**
 * A record of key-value pairs where the keys are strings and the values are either strings or numbers.
 * @category Types
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type DataRecord = Record<string, string | number>;

/**
 * An array of values where each item is either a string or a number.
 * @category Types
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type DataArray = Array<string | number>;

/**
 * Evaluates an {@link Ast} using the provided data and returns the transformed string.
 * @category Template Engine
 *
 * @param ast - The AST produced by {@link parseAst}.
 * @param data - The data record or array used to replace template placeholders.
 * @returns The transformed string.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformAst (ast: Ast, data: DataRecord | DataArray): string {
  if (Array.isArray(data) && ast.mode !== "index" || isObject(data) && ast.mode !== "property")
    throw new Error(`Expected an appropiate data type matching to ${ ast.mode }-based template variables`);

  return ast.nodes.map((node: AstNode): string => {
    if (node.kind === AstKind.TEXT)
      return (node as AstTextNode).value;

    switch (ast.mode) {
      case "property": {
        const dataIndex: string = (node as AstTemplatePropertyNode).property;
        const dataValue: string | number | undefined = (data as DataRecord)[ dataIndex ];

        if (dataValue === undefined)
          throw new Error(`Expected data for key ${ dataIndex }`);

        return dataValue.toString();
      }

      case "index": {
        const dataIndex: number = (node as AstTemplateIndexNode).index;
        const dataValue: string | number | undefined = (data as DataArray)[ dataIndex ];

        if (dataValue === undefined)
          throw new Error(`Expected data for key ${ dataIndex }`);

        return dataValue.toString();
      }
    }
  }).join("");
}

export type {
  DataRecord,
  DataArray
};
export {
  transformAst
};
