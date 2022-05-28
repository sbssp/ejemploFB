

import {  Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelo/experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {


  experiencias!:Experiencia[];
  
  constructor(private http:PortfolioService ) { }


  //Métodos html
  ngOnInit(): void {
    this.http.getExpeiencia()
    .subscribe(data=>{
      this.experiencias=data;
    });

      

  }
  
  editar(experiencia:Experiencia):void{
    localStorage.setItem("id", experiencia.id.toString());
   }

   borrar(experiencia:Experiencia){
     this.http.borrarExperiencia(experiencia)
     .subscribe(data=>{
       this.experiencias=this.experiencias;
       this.ngOnInit();

     })
   }
   
   
  //Mostrar/esconder formularios

  public mostrarAgregar:boolean = true;
  public esconderAgregar:boolean = false;
  public mostrarEditar:boolean = true;
  public esconderEditar:boolean = false;
 
  
 
  switchAgregar() {
    this.mostrarAgregar = !this.mostrarAgregar;
    this.esconderAgregar = !this.esconderAgregar;
    this.ngOnInit();
      }
   
   switchEditar() {
     this.mostrarEditar = !this.mostrarEditar;
     this.esconderEditar = !this.esconderEditar;
     this.ngOnInit();
   }
 
  
 

    }
