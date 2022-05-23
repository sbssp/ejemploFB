

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {


  experiencias!:Experiencia[];
  
  constructor(private http:PortfolioService, private router:Router ) { }


  //Métodos html
  ngOnInit(): void {
    this.http.getExpeiencia()
    .subscribe(data=>{
      this.experiencias=data;
    });

      

  }
  
  editar(experiencia:Experiencia):void{
    localStorage.setItem("id", experiencia.id.toString());
    window.scroll(0,410);

   }

   borrar(experiencia:Experiencia){
     this.http.borrarExperiencia(experiencia)
     .subscribe(data=>{
       this.experiencias=this.experiencias;
       alert("bloque borrado")
       window.location.reload();
     })
   }
   
   
 //Mostrar/esconder formularios
 public mostrar:boolean = true;
 public esconder:boolean = false;
 public mostrarAgregar:boolean = true;
 public esconderAgregar:boolean = false;
 public mostrarEditar:boolean = true;
 public esconderEditar:boolean = false;

 cambiarInput() {
   this.mostrar = !this.mostrar;
   this.esconder = !this.esconder;
   }

 habilitarAgregar() {
   this.mostrarAgregar = !this.mostrarAgregar;
   this.esconderAgregar = !this.esconderAgregar;
     }
  
  habilitarEditar() {
    this.mostrarEditar = !this.mostrarEditar;
    this.esconderEditar = !this.esconderEditar;
     }


    }
