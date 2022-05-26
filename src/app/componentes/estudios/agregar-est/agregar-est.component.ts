import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/modelo/estudios';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-agregar-est',
  templateUrl: './agregar-est.component.html',
  styleUrls: ['./agregar-est.component.css']
})
export class AgregarEstComponent implements OnInit {

  estudio= new Estudios();

  constructor(private http:PortfolioService) { }

  ngOnInit() {
    
    }

  
  GuardarEstudio(estudio:Estudios){
    this.http.createEstudios(estudio)
    .subscribe(data=>{
      this.refrescar();
    })
  }
  
  @Output()  switchAg: EventEmitter<string> = new EventEmitter();
  refrescar(){
       this.switchAg.emit();
  }
}