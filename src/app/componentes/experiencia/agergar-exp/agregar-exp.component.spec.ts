import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AgregarExp } from './agregar-exp.component';

describe('FormularioExpComponent', () => {
  let component: AgregarExp;
  let fixture: ComponentFixture<AgregarExp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarExp ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarExp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
