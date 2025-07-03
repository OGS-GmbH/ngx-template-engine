import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TemplatePipe } from "./pipes/template";

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
