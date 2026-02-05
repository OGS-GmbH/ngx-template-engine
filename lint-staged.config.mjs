export default {
  "*.{ts,mts,cts,js,mjs,cjs,md,json,jsonc,json5}": "eslint",
  "package.json": "npmPkgJsonLint -c ./node_modules/@ogs-gmbh/linter/package-json-open-source.rules.json"
};
