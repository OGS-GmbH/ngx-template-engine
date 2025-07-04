/* eslint-disable */

import { inject, Pipe, PipeTransform } from "@angular/core";
import { DataArray, DataRecord, transformAst } from "../transformer";
import { Ast } from "../ast";
import { parseAst } from "../parser";
import { TEMPLATE_ENGINE_CONFIG_TOKEN, TemplateEngineConfig } from "../token";

@Pipe({
  name: "template"
})
export class TemplatePipe implements PipeTransform {
  private readonly _config: TemplateEngineConfig | null = inject(TEMPLATE_ENGINE_CONFIG_TOKEN, { optional: true });

  private _boostrapValue: string | null = null;
  
  private _parseAndTransform (value: string, data: DataRecord | DataArray): string {
    const ast: Ast = parseAst(value);

    return transformAst(ast, data);
  }

  private _updateBoostrapValue (value: string): void {
    if (this._boostrapValue !== null)
      return;

    this._boostrapValue = value;
  }

  public transform(value: string, data: DataRecord | DataArray, fallbackOnError?: boolean): string {
    const shouldFallbackOnError: boolean | undefined = fallbackOnError ?? this._config?.fallbackOnError;

    if (!shouldFallbackOnError) {
      const transformedValue = this._parseAndTransform(value, data);

      this._updateBoostrapValue(transformedValue);

      return transformedValue;
    }

    try {
      const transformedValue = this._parseAndTransform(value, data);

      this._updateBoostrapValue(transformedValue);

      return transformedValue;
    } catch {
      if (this._boostrapValue === null)
        throw new Error("Expected an initial fallback value");

      return this._boostrapValue;
    }
  }
}
