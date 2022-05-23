import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/modelo/proyectos';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-editar-proy',
  templateUrl: './editar-proy.component.html',
  styleUrls: ['./editar-proy.component.css']
})
export class EditarProyComponent implements OnInit {

 
  proyecto:Proyectos = new Proyectos();

  constructor(private http:PortfolioService, private router:Router ) { }

  ngOnInit(): void {

  this.recibirId();

  }

  
  recibirId(){
    let id:any = localStorage.getItem("id");
    this.http.getProyectosId(id) 
    .subscribe(data=>{
      this.proyecto=data;
    })
   }
  
   actualizarProy(proyecto:Proyectos){
     this.http.editarProyectos(this.proyecto)
     .subscribe(data=>{
       this.proyecto=data;
       alert("Actualización Exitosa!!");
       window.location.reload();
     })
   }
  

    //Mostrar/esconder formularios
    public mostrar:boolean = true;
    public esconder:boolean = false;
    public mostrarAgregar:boolean = true;
    public esconderAgregar:boolean = false;
  
    cambiarInput() {
      this.mostrar = !this.mostrar;
      this.esconder = !this.esconder;
      }

    habilitarAgregar() {
      this.mostrarAgregar = !this.mostrarAgregar;
      this.esconderAgregar = !this.esconderAgregar;
        }
  

}



