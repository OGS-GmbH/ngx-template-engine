/* eslint-disable */

import { inject, Pipe, PipeTransform } from "@angular/core";
import { DataArray, DataRecord, transformAst } from "../transformer";
import { Ast } from "../ast";
import { parseAst } from "../parser";
import { TEMPLATE_ENGINE_CONFIG_TOKEN, TemplateEngineConfig } from "../token";

/**
 * Angular pipe that transforms template strings by replacing placeholders with provided data.
 * @category Pipes
 * @remarks
 * Supports optional fallback behavior: if an error occurs during transformation, the last successful value can be returned.
 *
 * @since 1.1.0
 * @author Simon Kovtyk
 */
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

  /**
   * Transforms a template string using the given data.
   * @param value - The template string to transform.
   * @param data - Object or array of values to replace placeholders.
   * @param fallbackOnError - Optional flag to return the last successful result on error.
   *
   * @throws If transformation fails and no fallback value is available.
   */
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
