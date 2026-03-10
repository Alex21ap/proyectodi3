import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialMascotasComponent } from './historial-mascotas.component';

describe('HistorialMascotasComponent', () => {
  let component: HistorialMascotasComponent;
  let fixture: ComponentFixture<HistorialMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialMascotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
