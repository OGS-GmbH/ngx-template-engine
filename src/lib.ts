import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TemplatePipe } from "./pipes/template";

/**
 * TemplatePipeModule exports TemplatePipe. For more information, see [TemplatePipe](https://ogs-gmbh.github.io/ngx-template-engine/reference/classes/TemplatePipe).
 * @category Modules
 *
 * @since 1.1.0
 * @author Simon Kovtyk
 */
/* eslint-disable @tseslint/no-extraneous-class */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TemplatePipe
  ],
  exports: [
    TemplatePipe
  ]
})
export class TemplatePipeModule {}
/* eslint-enable @tseslint/no-extraneous-class */
