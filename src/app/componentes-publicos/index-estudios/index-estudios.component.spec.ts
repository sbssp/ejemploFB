import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEstudiosComponent } from './index-estudios.component';

describe('IndexEstudiosComponent', () => {
  let component: IndexEstudiosComponent;
  let fixture: ComponentFixture<IndexEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexEstudiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
