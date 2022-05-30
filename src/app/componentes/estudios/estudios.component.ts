import {  Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/modelo/estudios';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios!:Estudios[];
  
  constructor(private http:PortfolioService) { }


  //Métodos html
  ngOnInit(): void {
    this.http.getEstudios()
    .subscribe(data=>{
      this.estudios=data;
    });

  }
  
  editar(estudio:Estudios):void{
    localStorage.setItem("id", estudio.id.toString());

   }

   borrar(estudio:Estudios){
     this.http.borrarEstudios(estudio)
     .subscribe(data=>{
       this.estudios=this.estudios;
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


  scroll(el: HTMLElement) {
    el.scrollIntoView();
}


}
