import { InjectionToken, ValueProvider } from "@angular/core";

export type TemplateEngineConfig = {
  fallbackOnError?: boolean;
};
export const TEMPLATE_ENGINE_CONFIG_TOKEN: InjectionToken<TemplateEngineConfig> = new InjectionToken<TemplateEngineConfig>("template-engine-config");
export function provideTemplateEngineConfig (config: TemplateEngineConfig): ValueProvider {
  return {
    provide: TEMPLATE_ENGINE_CONFIG_TOKEN,
    useValue: config
  };
}
