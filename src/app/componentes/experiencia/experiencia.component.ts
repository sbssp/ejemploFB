import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/experiencia';
import { Persona } from 'src/app/modelo/persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {


  experiencias:Experiencia[];
  personas:Persona[];

  constructor(private http:PortfolioService, private router:Router ) { }

  ngOnInit(): void {
    this.http.getExpeiencia()
    .subscribe(data=>{
      this.experiencias=data;
    })
    this.http.getPersona()
    .subscribe(data=>{
      this.personas=data;
    })
  }
  
  public mostrar:boolean = true;
  public esconder:boolean = false;

  cambiarInput() {
    this.mostrar = !this.mostrar;
    this.esconder = !this.esconder;
    }
}
