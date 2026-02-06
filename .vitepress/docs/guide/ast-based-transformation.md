---
prev: false
next: false
---

# AST-based transformation

Internally, `ngx-template-engine` uses an AST as representation of each `Text` or `Template` node.

You can make use of this AST to manipulate the Template String with your values.

## Usage

To make it happen, we need [`parseAst`](/reference/AST/parseAst) to parse the AST and [`transformAst`](/reference/AST/transformAst) to manipulate the AST with our values and get the resulting `string`.

Take the following example:

```ts [example.ts]
import { parseAst, transformAst } from "@ogs-gmbh/ngx-template-engine";

const ast = parseAst("Hello {name}");
const result = transformAst(ast, { name: "World" });

console.assert(result === "Hello World");
```

Templates are parsed into an AST and then evaluated with data to produce the final string.
