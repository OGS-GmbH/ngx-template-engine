import { InjectionToken, ValueProvider } from "@angular/core";

/**
 * Configuration options for the template engine.
 * @category NG interop
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
 * @category NG interop
 * @readonly
 *
 * @since 1.1.0
 * @author Simon Kovtyk
 */
export const TEMPLATE_ENGINE_CONFIG_TOKEN: InjectionToken<TemplateEngineConfig> = new InjectionToken<TemplateEngineConfig>("template-engine-config");
/**
 * Creates a value provider for supplying a {@link TemplateEngineConfig} to the dependency injection system.
 * @category NG interop
 *
 * @param config - The template engine configuration to provide.
 * @returns A `ValueProvider` that binds the configuration to {@link TEMPLATE_ENGINE_CONFIG_TOKEN}.
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
