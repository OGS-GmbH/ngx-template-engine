import { InjectionToken, ValueProvider } from "@angular/core";

/**
 * Configuration options for the template engine.
 * @category Types
 * @property fallbackOnError - Optional flag to return the last successful result when a transformation fails.
 *
 * @since 1.1.0
 * @author Simon Kovtyk
 */
export type TemplateEngineConfig = {
  fallbackOnError?: boolean;
};
/**
 * Injection token for providing template engine configuration.
 * @category Tokens
 * @readonly
 *
 * @since 1.1.0
 * @author Simon Kovtyk
 */
export const TEMPLATE_ENGINE_CONFIG_TOKEN: InjectionToken<TemplateEngineConfig> = new InjectionToken<TemplateEngineConfig>("template-engine-config");
/**
 * Creates an Angular `ValueProvider` for the template engine configuration.
 * @category Configs
 *
 * @param config - The template engine configuration to provide.
 * @returns A `ValueProvider` that provides the given configuration
 *
 * @since 1.1.0
 * @author Simon Kovtyk
 */
export function provideTemplateEngineConfig (config: TemplateEngineConfig): ValueProvider {
  return {
    provide: TEMPLATE_ENGINE_CONFIG_TOKEN,
    useValue: config
  };
}
