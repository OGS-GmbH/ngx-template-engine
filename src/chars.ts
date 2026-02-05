/**
 * Defines the template manipulation char properties
 * @category AST
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
enum CharKind {
  /**
   * Indicates the starting character of a template expression.
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  START = "start",
  /**
   * Initiates the ending character of a template expression.
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  END = "end"
}

/**
 * Describes a template manipulation character and its kind
 * @category AST
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type CharDescriptor = {
  /**
   * Character used in template manipulation
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  "char": string;
  /**
   * Indicates the kind of template character
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  kind: CharKind;
};

/**
 * An representation of template manipulation characters
 * @category AST
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const TEMPLATE_CHARS: Record<string, CharDescriptor> = {
  /**
   * A {@link CharDescriptor} for the opening template manipulation character
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  CURLY_LEFT: {
    "char": "{",
    kind: CharKind.START
  },
  /**
   * A {@link CharDescriptor} for the closing template manipulation character
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  CURLY_RIGHT: {
    "char": "}",
    kind: CharKind.END
  }
};

export type {
  CharDescriptor
};
export {
  CharKind,
  TEMPLATE_CHARS
};
