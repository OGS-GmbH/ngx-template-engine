import { Ast, AstKind, AstNode, AstTemplatePropertyNode, AstTextNode, AstTemplateIndexNode } from "./ast";
import { isObject } from "./utils";

type DataRecord = Record<string, string | number>;

type DataArray = Array<string | number>;

function transformAst (ast: Ast, data: DataRecord | DataArray): string {
  if (Array.isArray(data) && ast.mode !== "index" || isObject(data) && ast.mode !== "property")
    throw new Error(`Expected an appropiate data type matching to ${ ast.mode }-based template variables`);

  /* eslint-disable-next-line array-callback-return */
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
