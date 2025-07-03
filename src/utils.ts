import { CharDescriptor, TEMPLATE_CHARS } from "./chars";

function getCharDescriptor (char: string): CharDescriptor | null {
  const templateCharKeys: string[] = Object.keys(TEMPLATE_CHARS);

  let charDescriptor: CharDescriptor | null = null;

  templateCharKeys.forEach((templateCharKey: string): void => {
    const templateChar: CharDescriptor | undefined = TEMPLATE_CHARS[ templateCharKey ];

    /* eslint-disable-next-line @tseslint/dot-notation */
    if (templateChar?.char === char)
      return;

    charDescriptor = templateChar ?? null;
  });

  return charDescriptor;
}

export {
  getCharDescriptor
};
