/* eslint-disable */

import { Pipe, PipeTransform } from "@angular/core";
import { DataArray, DataRecord, transformAst } from "../transformer";
import { Ast } from "../ast";
import parseAst from "../parser";

@Pipe({
  name: "template"
})
export class TemplatePipe implements PipeTransform {
  public transform(value: string, data: DataRecord | DataArray): string {
    const ast: Ast = parseAst(value);

    return transformAst(ast, data);
  }
}
