import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/modelo/proyectos';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto!:Proyectos[];
  
  constructor(private http:PortfolioService, private router:Router ) { }


  //Métodos html
  ngOnInit(): void {
    this.http.getProyectos()
    .subscribe(data=>{
      this.proyecto=data;
    });

      

  }
  
  editar(proyecto:Proyectos):void{
    localStorage.setItem("id", proyecto.id.toString());
    //window.scroll(0,410);

   }

   scroll() {
    let el:any = document.getElementById("editar");
    el.scrollIntoView("editar");  
  }

   borrar(proyectos:Proyectos): void{
     this.http.borrarProyectos(proyectos)
     .subscribe(data=>{
       this.proyecto=this.proyecto;
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
