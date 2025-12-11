/**
 * Represents an Abstract Syntax Tree (AST) for the template engine.
 * @category Types
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Ast = {
  mode: AstMode;
  nodes: AstNodes;
};

/**
 * An array of AST nodes. Represents the children or elements of an {@link Ast}.
 * @category Types
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type AstNodes = AstNode[];

/**
 * Specifies the mode of an AST. When the first template variable is {0} (index-based), every following
 * template variable must be index-based. Same applies to {property} (property-based).
 * This result in only having one mode for the ast to work with.
 * @category Types
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type AstMode = "index" | "property";

/**
 * Represents a single node in an Abstract Syntax Tree (AST).
 * @category Types
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type AstNode = {
  kind: AstKind;
};

/**
 * Represents an AST node that refers to a template property.
 * Extends {@link AstNode} by adding a `property` field for property-based access.
 * @category Types
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type AstTemplatePropertyNode = AstNode & {
  property: string;
};

/**
 * Represents an AST node that refers to a template index. Extends {@link AstNode} by adding an `index` field for index-based access.
 * @category Types
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type AstTemplateIndexNode = AstNode & {
  index: number;
};

/**
 * Represents an AST node that contains plain text. Extends {@link AstNode} by adding a `value` field for the text content.
 * @category Types
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type AstTextNode = AstNode & {
  value: string;
};

/**
 * Represents the different kinds of AST nodes.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
enum AstKind {
  TEMPLATE_PROPERTY = "template-property",
  TEMPLATE_INDEX = "template-index",
  TEXT = "text"
}

/**
 * Creates an AST node representing a template property.
 * This is a helper function that constructs an {@link AstTemplatePropertyNode} with the appropriate {@link AstKind.TEMPLATE_PROPERTY} kind.
 * @category Utilities
 *
 * @param property - The name of the template property this node should represent.
 * @returns A new {@link AstTemplatePropertyNode} instance.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function createAstTemplatePropertyNode (property: string): AstTemplatePropertyNode {
  return {
    kind: AstKind.TEMPLATE_PROPERTY,
    property
  };
}

/**
 * Creates an AST node representing a template index access.
 * This helper constructs an {@link AstTemplateIndexNode} with the appropriate {@link AstKind.TEMPLATE_INDEX} kind.
 * @category Utilities
 *
 * @param index - The numeric index this node should represent.
 * @returns A new {@link AstTemplateIndexNode} instance.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function createAstTemplateIndexNode (index: number): AstTemplateIndexNode {
  return {
    kind: AstKind.TEMPLATE_INDEX,
    index
  };
}

/**
 * Creates an AST node representing plain text content.
 * This helper constructs an {@link AstTextNode} with the appropriate {@link AstKind.TEXT} kind.
 * @category Utilities
 *
 * @param value - The text content to store in the node.
 * @returns A new {@link AstTextNode} instance.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
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
