import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarCitaDirective implements OnInit {
  @Input('appResaltar') fechaCita!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (!this.fechaCita) return;

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const manana = new Date(hoy);
    manana.setDate(hoy.getDate() + 1);

    const fechaCitaDate = new Date(this.fechaCita);
    fechaCitaDate.setHours(0, 0, 0, 0);

    if (fechaCitaDate.getTime() === hoy.getTime() || fechaCitaDate.getTime() === manana.getTime()) {
      this.el.nativeElement.classList.add('table-primary', 'fw-semibold');
    }
  }
}