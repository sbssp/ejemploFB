import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/modelo/habilidades';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidades!: Habilidades[];


  constructor(private http: PortfolioService) { }




  ngOnInit(): void {
    this.http.getHabilidades()
      .subscribe(data => {
        this.habilidades = data;
      });

  }


  editar(habilidad: Habilidades): void {
    localStorage.setItem("id", habilidad.id.toString());
  }

  borrar(habilidad: Habilidades) {
    this.http.borrarHabilidades(habilidad)
      .subscribe(data => {
        this.habilidades = this.habilidades;
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
  }

  switchEditar() {
    this.mostrarEditar = !this.mostrarEditar;
    this.esconderEditar = !this.esconderEditar;
    this.ngOnInit();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }



}