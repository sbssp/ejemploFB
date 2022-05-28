import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcercadeComponent } from './acercade.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AcercadeComponent', () => {
  let component: AcercadeComponent;
  let fixture: ComponentFixture<AcercadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadeComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
