import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'eurify'
})
export class EurifyPipe implements PipeTransform {
  transform(value: string | null): string {
    return value ? value.replace('.', ',') + '€' : '';
  }
}
