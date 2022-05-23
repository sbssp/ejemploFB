import { Component, OnInit } from '@angular/core';
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

  constructor(private http:PortfolioService, private router:Router ) { }

  ngOnInit() {
    
    }

  
  guardarProyecto(proyecto:Proyectos){
    this.http.CreateProyectos(proyecto)
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
