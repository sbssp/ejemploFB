import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/modelo/estudios';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-editar-est',
  templateUrl: './editar-est.component.html',
  styleUrls: ['./editar-est.component.css']
})
export class EditarEstComponent implements OnInit {

  
  estudio:Estudios = new Estudios();

  constructor(private http:PortfolioService) { }

  ngOnInit(): void {

  this.recibirId();

  }

  recibirId(){
    let id:any = localStorage.getItem("id");
    this.http.getEstudiosId(id) 
    .subscribe(data=>{
      this.estudio=data;
    })
   }
  
   actualizarEst(estudio:Estudios){
     this.http.editarEstudios(this.estudio)
     .subscribe(data=>{
       this.estudio=data;
       this.refrescar();
     })
   }
  
   @Output()  switchEd: EventEmitter<string> = new EventEmitter();
   refrescar(){
        this.switchEd.emit();
   }
 
  
}