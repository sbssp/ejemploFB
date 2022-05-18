import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioExpComponent } from './formulario-exp.component';

describe('FormularioExpComponent', () => {
  let component: FormularioExpComponent;
  let fixture: ComponentFixture<FormularioExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
