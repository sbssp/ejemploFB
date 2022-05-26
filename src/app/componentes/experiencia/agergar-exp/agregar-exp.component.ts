

import { Component, EventEmitter, Output } from '@angular/core';
import { Experiencia } from 'src/app/modelo/experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-agregar-exp',
  templateUrl: './agregar-exp.component.html',
  styleUrls: ['./agregar-exp.component.css']
})



export class AgregarExp {
  
experiencia= new Experiencia();

  constructor(private http:PortfolioService) { }

  
  GuardarExperiencia(experiencia:Experiencia){
    this.http.createExperiencia(experiencia)
    .subscribe(data=>{
      this.refrescar();   
    })
  }
  
  @Output()  switchAg: EventEmitter<string> = new EventEmitter();
  refrescar(){
       this.switchAg.emit();
  }

}
