import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoCita'
})
export class EstadoCitaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
