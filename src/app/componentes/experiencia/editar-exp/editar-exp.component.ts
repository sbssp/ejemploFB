import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {

  
  experiencia:Experiencia = new Experiencia();

  constructor(private http:PortfolioService, private router:Router ) { }

  ngOnInit(): void {

  this.recibirId();

  }

  
  recibirId(){
    let id:any = localStorage.getItem("id");
    this.http.getExperienciaId(id) 
    .subscribe(data=>{
      this.experiencia=data;
    })
   }
  
   actualizarExp(experiencia:Experiencia){
     this.http.editarExperiencia(this.experiencia)
     .subscribe(data=>{
       this.experiencia=data;
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


