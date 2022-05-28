import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Habilidades } from 'src/app/modelo/habilidades';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-editar-skills',
  templateUrl: './editar-skills.component.html',
  styleUrls: ['./editar-skills.component.css']

})
export class EditarSkillsComponent implements OnInit {


  habilidad:Habilidades = new Habilidades();

  constructor(private http:PortfolioService) { }

  ngOnInit(): void {
  this.recibirId();
  }

  
  recibirId(){
    let id:any = localStorage.getItem("id");
    this.http.getHabilidadesId(id) 
    .subscribe(data=>{
      this.habilidad=data;
    })
   }
  
   actualizarSkill(habilidad:Habilidades){
     this.http.editarHabilidades(this.habilidad)
     .subscribe(data=>{
       this.habilidad=data;
       this.refrescar();
     })
   }
  
   @Output()  switchEd: EventEmitter<string> = new EventEmitter();
   refrescar(){
        this.switchEd.emit();
   }
 

}


