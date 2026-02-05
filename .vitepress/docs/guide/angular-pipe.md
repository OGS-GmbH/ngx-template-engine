---
prev: false
next: false
---

# Angular Pipe

The template engine replaces placeholders inside template strings using data from objects or arrays. It powers the TemplatePipe and can also be used programmatically.

## Configure

Import the Template Pipe, to get started:

```ts [app.component.ts]
import { Component } from "@angular/common";
import { TemplatePipe } from "@ogs-gmbh/ngx-template-engine";

@Component({
  imports: [
    TemplatePipe
  ],
  templateUrl: "./app.component.html"
})
export class AppComponent {}
```

::: info Advanced configuration (optional)

We provide a global configuration with some additional behaviors.

Refer to the [config]() type for getting a deeper understanding.

:::

## Usage

Each piped value requires either a [`DataArray`]() or [`DataObject`]() for getting the template engine to work.

As an example, we define an [`DataObject`]() inside our `app.component.ts`:

```ts [app.component.ts]
import { Component } from "@angular/common";
import { TemplatePipe } from "@ogs-gmbh/ngx-template-engine";

@Component({
  imports: [
    TemplatePipe
  ],
  templateUrl: "./app.component.html"
})
export class AppComponent {
  user = {
    name: "World"
  };
}
```

Now, you can use the [`DataObject`]() inside your pipe:

```html [app.component.html]
<p>{{ "Hello {name}" | template : user }}</p>
```

The Paragraph-Element should now contain `Hello World` as TextNode.


## 3. Programmatic usage
```typescript [example.ts]
import { parseAst, transformAst } from "@ogs-gmbh/ngx-template-engine";

const ast = parseAst("User: {{user.name}}");
const result = transformAst(ast, { user: { name: "Bob" } });
// "User: Bob"
```
Templates are parsed into an AST (parseAst) and then evaluated with data (transformAst) to produce the final string.
