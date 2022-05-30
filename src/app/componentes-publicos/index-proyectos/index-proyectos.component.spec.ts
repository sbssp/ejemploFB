import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProyectosComponent } from './index-proyectos.component';

describe('IndexProyectosComponent', () => {
  let component: IndexProyectosComponent;
  let fixture: ComponentFixture<IndexProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
