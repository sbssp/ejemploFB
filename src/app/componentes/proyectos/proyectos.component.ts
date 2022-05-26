import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/modelo/proyectos';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto!: Proyectos[];

  constructor(private http: PortfolioService) { }


  //Métodos html
  ngOnInit(): void {
    this.http.getProyectos()
      .subscribe(data => {
        this.proyecto = data;
      });
  }

  enviarId(proyecto: Proyectos): void {
    localStorage.setItem("id", proyecto.id.toString());
    
  }


  borrar(proyectos: Proyectos): void {
    this.http.borrarProyectos(proyectos)
      .subscribe(data => {
        this.proyecto = this.proyecto;
        this.ngOnInit();
      })
  }


  //Mostrar/esconder formularios
  public mostrarAgregar: boolean = true;
  public esconderAgregar: boolean = false;
  public mostrarEditar: boolean = true;
  public esconderEditar: boolean = false;


  switchAgregar() {
    this.mostrarAgregar = !this.mostrarAgregar;
    this.esconderAgregar = !this.esconderAgregar;
    this.ngOnInit();

    //scroll(0,410);
  }

  switchEditar() {
    this.mostrarEditar = !this.mostrarEditar;
    this.esconderEditar = !this.esconderEditar;
    this.ngOnInit();
  }



}
