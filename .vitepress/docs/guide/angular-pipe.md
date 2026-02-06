---
prev: false
next: false
---

# Angular Pipe

The Template Engine replaces placeholders inside template strings using data from `Object` or `Array`. It powers the [`TemplatePipe`](/reference/NG_interop/TemplatePipe) and can also be used programmatically.

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

Refer to the [config](/reference/NG_interop/TemplateEngineConfig) type for getting a deeper understanding.

:::

## Usage

Each piped value requires either a [`DataArray`](/reference/AST/DataArray) or [`DataRecord`](/reference/AST/DataRecord) for getting the template engine to work.

As an example, we define an `DataRecord` inside our `app.component.ts`:

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

Now, you can use the `DataRecord` inside your pipe:

```html [app.component.html]
<p>{{ "Hello {name}" | template : user }}</p>
```

The Paragraph-Element should now contain `Hello World` as TextNode.
