import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPropietariosComponent } from './registro-propietarios.component';

describe('RegistroPropietariosComponent', () => {
  let component: RegistroPropietariosComponent;
  let fixture: ComponentFixture<RegistroPropietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroPropietariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
