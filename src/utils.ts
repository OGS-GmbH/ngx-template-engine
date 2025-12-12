import { CharDescriptor, TEMPLATE_CHARS } from "./chars";

function getCharDescriptor (char: string): CharDescriptor | null {
  const templateCharKeys: string[] = Object.keys(TEMPLATE_CHARS);

  let charDescriptor: CharDescriptor | null = null;

  templateCharKeys.forEach((templateCharKey: string): void => {
    const templateChar: CharDescriptor | undefined = TEMPLATE_CHARS[ templateCharKey ];

    if (templateChar?.char !== char)
      return;

    charDescriptor = templateChar;
  });

  return charDescriptor;
}

function isObject (value: unknown): boolean {
  return typeof value === "object" && !Array.isArray(value) && value !== null;
}

export {
  getCharDescriptor,
  isObject
};
