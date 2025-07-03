type Ast = {
  mode: AstMode;
  nodes: AstNodes;
};

type AstNodes = AstNode[];

/**
 * When the first template variable is {0} (index-based), every following
 * template variable must be index-based. Same applies to {property} (property-based).
 * This result in only having one mode for the ast to work with.
 */
type AstMode = "index" | "property";

type AstNode = {
  kind: AstKind;
};

type AstTemplatePropertyNode = AstNode & {
  property: string;
};

type AstTemplateIndexNode = AstNode & {
  index: number;
};

type AstTextNode = AstNode & {
  value: string;
};

enum AstKind {
  TEMPLATE_PROPERTY = "template-property",
  TEMPLATE_INDEX = "template-index",
  TEXT = "text"
}

function createAstTemplatePropertyNode (property: string): AstTemplatePropertyNode {
  return {
    kind: AstKind.TEMPLATE_PROPERTY,
    property
  };
}

function createAstTemplateIndexNode (index: number): AstTemplateIndexNode {
  return {
    kind: AstKind.TEMPLATE_INDEX,
    index
  };
}

function createAstTextNode (value: string): AstTextNode {
  return {
    kind: AstKind.TEXT,
    value
  };
}

export type {
  Ast,
  AstNodes,
  AstNode,
  AstMode,
  AstTemplatePropertyNode,
  AstTemplateIndexNode,
  AstTextNode
};
export {
  AstKind,
  createAstTemplatePropertyNode,
  createAstTemplateIndexNode,
  createAstTextNode
};
