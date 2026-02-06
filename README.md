> *We're OGS, check out our work on [github.com/ogs-gmbh](https://github.com/ogs-gmbh)*

# ngx-template-engine

*A flexible and efficient template engine for dynamic content rendering. It enables easy integration of customizable templates within Angular applications.*

![preview](./docs/preview.avif)

<a href="./LICENSE" target="_blank"><img alt="license badge" src="https://img.shields.io/github/license/OGS-GmbH/ngx-template-engine?color=0f434e&logo=hackthebox&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://github.com/OGS-GmbH/ngx-template-engine/actions/workflows/main-deploy.yml" target="_blank"><img alt="workflow badge" src="https://img.shields.io/github/actions/workflow/status/OGS-GmbH/ngx-template-engine/main-deploy.yml?color=0f434e&logo=rocket&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://www.npmjs.com/package/@ogs-gmbh/ngx-template-engine" target="_blank"><img alt="npm badge" src="https://img.shields.io/npm/v/%40ogs-gmbh%2Fngx-template-engine?color=0f434e&logo=npm&logoColor=000000&labelColor=ffffff" /></a>

## Getting Started

> [!IMPORTANT]
> We're offering an extensive API-Reference covered with in-depth usage examples of this project.

To get a starting point, simply refer to our documentation at [ogs-gmbh.github.io/ngx-template-engine](https://ogs-gmbh.github.io/ngx-template-engine).

## Prerequisites

- Node.js version 18 or higher.
- A package manager: e.g. npm, pnpm, ...

## Installation

Using npm:
```sh
$ npm install @ogs-gmbh/ngx-template-engine
```

<details>
  <summary>Using a different package managers?</summary>
  <br/>
  
  Using yarn:
  ```sh
  $ pnpm add @ogs-gmbh/ngx-template-engine
  ```
  
  Using pnpm:
  ```sh
  $ pnpm add @ogs-gmbh/ngx-template-engine
  ```
  
  Using bun:
  ```sh
  $ bun add @ogs-gmbh/ngx-template-engine
  ```

</details>

## Usage

Each piped value requires either a [`DataArray`](https://ogs-gmbh.github.io/ngx-template-engine/reference/AST/DataArray) or [`DataRecord`](https://ogs-gmbh.github.io/ngx-template-engine/reference/AST/DataRecord) for getting the template engine to work.

As an example, we define an `DataRecord` inside our `app.component.ts`:

```ts
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

```html
<p>{{ "Hello {name}" | template : user }}</p>
```

The Paragraph-Element should now contain `Hello World` as TextNode.

## License

The MIT License (MIT) - Please have a look at the [LICENSE file](./LICENSE) for more details.

## Contributing
Contributions are always welcome and greatly appreciated. Whether you want to report a bug, suggest a new feature, or improve the documentation, your input helps make the project better for everyone.

Feel free to submit a pull request, issue or feature request.

### Issues and Feature Requests
Reporting an issue or creating a feature request is made by creating a new issue on this repository.

You can create a [new issue or feature request here](../../issues/new/choose).

### Pull Requests
GitHub offers a solid guideline for contributing to open source projects through pull requests, covering key practices. These best practices provide a reliable starting point for making effective contributions.

You can find the [guidelines here](https://docs.github.com/get-started/exploring-projects-on-github/contributing-to-a-project).

### Code Of Conduct
We are committed to keeping a welcoming, inclusive, and respectful community for everyone. To help us achieve this, we kindly ask that you adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Disclaimer

All trademarks and registered trademarks mentioned are property of their respective owners and are used for identification purposes only. Use of these names does not imply endorsement or affiliation.

This project is a trademark of OGS Gesellschaft für Datenverarbeitung und Systemberatung mbH. The License does not grant rights to use the trademark without permission.

---

<a href="https://www.ogs.de/en/">
  <picture>
    <source
      srcset="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/light.svg"
      media="(prefers-color-scheme: dark)"
    />
    <img height="64" alt="OGS Logo" src="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/dark.svg"
  </picture>
</a>

<p>OGS Gesellschaft für Datenverarbeitung und Systemberatung mbH</p>

[Imprint](https://www.ogs.de/en/imprint/) | [Contact](https://www.ogs.de/en/contact/) | [Careers](https://www.ogs.de/en/about-ogs/#Careers)
