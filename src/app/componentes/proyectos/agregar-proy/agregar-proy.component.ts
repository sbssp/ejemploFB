import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/modelo/proyectos';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-agregar-proy',
  templateUrl: './agregar-proy.component.html',
  styleUrls: ['./agregar-proy.component.css']
})

export class AgregarProyComponent implements OnInit {


proyecto = new Proyectos();

  constructor(private http:PortfolioService) { }

  ngOnInit() {
    
    }

  
  guardarProyecto(proyecto:Proyectos){
    this.http.createProyectos(proyecto)
    .subscribe(data=>{
      this.refrescar();
    })
  }
  
  @Output()  switchAg: EventEmitter<string> = new EventEmitter();
  refrescar(){
       this.switchAg.emit();
  }

}
