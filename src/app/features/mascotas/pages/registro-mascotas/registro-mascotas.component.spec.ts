import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMascotasComponent } from './registro-mascotas.component';

describe('RegistroMascotasComponent', () => {
  let component: RegistroMascotasComponent;
  let fixture: ComponentFixture<RegistroMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroMascotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
