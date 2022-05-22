import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEstComponent } from './agregar-est.component';

describe('AgregarEstComponent', () => {
  let component: AgregarEstComponent;
  let fixture: ComponentFixture<AgregarEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
