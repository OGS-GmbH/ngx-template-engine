---
prev: false
next: false
---

# AST-based transformation

Internally, `ngx-template-engine` uses an AST as representation of each `Text` or `Template` node.

You can make use of this AST to manipulate the Template String with your values.

## Usage

To make it happen, we need [``]() to parse the AST and [``]() to manipulate the AST with our values and get the resulting `string`.

Take the following example:

```ts [example.ts]

```
