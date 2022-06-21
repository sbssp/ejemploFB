import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/modelo/estudios';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import {CdkDragDrop, moveItemInArray, CdkDrag} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios!: Estudios[];
  estudio = new Estudios();

  constructor(private http: PortfolioService) { }


  //Métodos html
  ngOnInit(): void {
    this.http.getEstudios()
      .subscribe(data => {
        this.estudios = data;
      });

  }

  editar(estudio: Estudios): void {
    localStorage.setItem("id", estudio.id.toString());

  }

  borrar(estudio: Estudios) {
    this.http.borrarEstudios(estudio)
      .subscribe(data => {
        this.estudios = this.estudios;
        this.ngOnInit();
      })
  }


  //Mostrar/esconder formularios

  mostrarAgregar: boolean = true;
  esconderAgregar: boolean = false;
  mostrarEditar: boolean = true;
  esconderEditar: boolean = false;
  mostrarOrdenar: boolean = false;
  esconderOrdenar: boolean = true;



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

  switchOrdenar() {
    this.mostrarOrdenar = !this.mostrarOrdenar;
    this.esconderOrdenar = !this.esconderOrdenar;
    this.ngOnInit();
  }

 
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.estudios, event.previousIndex, event.currentIndex);
  }
  
  
}
