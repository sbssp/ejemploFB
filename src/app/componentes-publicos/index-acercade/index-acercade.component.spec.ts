import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAcercadeComponent } from './index-acercade.component';

describe('IndexAcercadeComponent', () => {
  let component: IndexAcercadeComponent;
  let fixture: ComponentFixture<IndexAcercadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexAcercadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAcercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
