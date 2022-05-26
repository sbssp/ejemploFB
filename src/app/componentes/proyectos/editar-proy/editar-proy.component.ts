import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Proyectos } from 'src/app/modelo/proyectos';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-editar-proy',
  templateUrl: './editar-proy.component.html',
  styleUrls: ['./editar-proy.component.css']
})
export class EditarProyComponent implements OnInit {

 
  proyecto:Proyectos = new Proyectos();

  constructor(private http:PortfolioService) { }

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
       this.refrescar();
     })
   }

   
   @Output()  switchEd: EventEmitter<string> = new EventEmitter();
   refrescar(){
        this.switchEd.emit();
   }
 

}



