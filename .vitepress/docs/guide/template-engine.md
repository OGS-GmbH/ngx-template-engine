# Template Engine
The template engine replaces placeholders inside template strings using data from objects or arrays. It powers the TemplatePipe and can also be used programmatically.

## 1. Configure (optional)
Enable optional fallback behavior using Angular DI:

```typescript [example.ts]
// app.module.ts
import { provideTemplateEngineConfig } from "@ogs-gmbh/ngx-template-engine";

providers: [
  provideTemplateEngineConfig({ fallbackOnError: true })
];
```
If you skip this step, the default behavior is used (no fallback).

## 2. Using the Angular pipe
The easiest way to use the template engine is via the Angular pipe: TemplatePipe.

```html [example.html]
<span>{{ "Hello, {{user.name}}" | template:user }}</span>
// or with fallback behavior:
<span>{{ "Hello, {{user.name}}" | template:user:true }}</span>
```

```typescript [example.ts]
class YourComponent {
  user = { name: "Alice" };
}
// Hello, Alice!
```

## 3. Programmatic usage
```typescript [example.ts]
import { parseAst, transformAst } from "@ogs-gmbh/ngx-template-engine";

const ast = parseAst("User: {{user.name}}");
const result = transformAst(ast, { user: { name: "Bob" } });
// "User: Bob"
```
Templates are parsed into an AST (parseAst) and then evaluated with data (transformAst) to produce the final string.
