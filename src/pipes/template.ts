/* eslint-disable */

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "template"
})
export class TemplatePipe implements PipeTransform {
  public transform(value: string, data: Record<string, string>): void {
    
  }
}
