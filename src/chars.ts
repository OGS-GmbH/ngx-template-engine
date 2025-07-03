enum CharKind {
  START = "start",
  END = "end"
}

type CharDescriptor = {
  "char": string;
  kind: CharKind;
};

const TEMPLATE_CHARS: Record<string, CharDescriptor> = {
  CURLY_LEFT: {
    "char": "{",
    kind: CharKind.START
  },
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
