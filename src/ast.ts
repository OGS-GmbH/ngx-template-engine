/**
 * Represents an Abstract Syntax Tree (AST) for the template engine.
 * @category AST
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Ast = {
  /**
   * The mode of the AST, indicating whether it uses index-based or property-based template variables.
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  mode: AstMode;
  /**
   * The list of nodes that make up the AST.
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  nodes: AstNodes;
};

/**
 * A list of {@link AstNode} elements. Typically used to represent the children of an {@link Ast}.
 * @category AST
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type AstNodes = AstNode[];

/**
 * Specifies the mode of an AST. When the first template variable is {0} (index-based), every following
 * template variable must be index-based. Same applies to {property} (property-based).
 * This result in only having one mode for the ast to work with.
 * @category AST
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type AstMode = "index" | "property";

/**
 * Represents a single node in an Abstract Syntax Tree (AST).
 * @category AST
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type AstNode = {
  kind: AstKind;
};

/**
 * Represents an AST node that refers to a template property.
 * Extends {@link AstNode} by adding a "property" field for property-based access.
 * @category AST
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type AstTemplatePropertyNode = AstNode & {
  property: string;
};

/**
 * Represents an AST node that refers to a template index. Extends {@link AstNode} by adding an "index" field for index-based access.
 * @category AST
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type AstTemplateIndexNode = AstNode & {
  index: number;
};

/**
 * Represents an AST node that contains plain text. Extends {@link AstNode} by adding a "value" field for the text content.
 * @category AST
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type AstTextNode = AstNode & {
  value: string;
};

/**
 * Enumerates the kinds of AST nodes used by the template engine.
 * @category AST
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
 * Creates an AST node representing a property access expression.
 * @category AST
 *
 * @param property - The name of the template property to access.
 * @returns A new {@link AstTemplatePropertyNode} with the given property name.
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
 * Creates an AST node representing an indexed access expression.
 * @category AST
 *
 * @param index - The numeric index to access.
 * @returns A new {@link AstTemplateIndexNode} with the given index.
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
 * Creates an AST node representing a plain text segment in the template.
 * @category AST
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
