import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEstComponent } from './editar-est.component';

describe('EditarEstComponent', () => {
  let component: EditarEstComponent;
  let fixture: ComponentFixture<EditarEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
