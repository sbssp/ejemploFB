

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-agregar-exp',
  templateUrl: './agregar-exp.component.html',
  styleUrls: ['./agregar-exp.component.css']
})



export class AgregarExp implements OnInit {
  
experiencia= new Experiencia();

  constructor(private http:PortfolioService, private router:Router ) { }

  ngOnInit() {
    
    }

  
  GuardarExperiencia(experiencia:Experiencia){
    this.http.createExperiencia(experiencia)
    .subscribe(data=>{
      alert("Carga Exitosa!");
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
