type Ast = {
  mode: AstMode;
  nodes: AstNodes;
};

type AstNodes = AstNodeLike[];

/**
 * When the first template variable is {0} (index-based), every following
 * template variable must be index-based. Same applies to {property} (property-based).
 * This result in only having one mode for the ast to work with.
 */
type AstMode = "index" | "property";

type AstNodeLike = {
  kind: AstKind;
};

type AstTemplatePropertyNode = AstNodeLike & {
  property: string;
};

type AstTemplateIndexNode = AstNodeLike & {
  index: number;
};

type AstTextNode = AstNodeLike & {
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
