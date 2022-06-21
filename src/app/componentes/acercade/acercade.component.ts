import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {


  personas!: Persona[];

  constructor(private http: PortfolioService) { }

  ngOnInit(): void {
    this.http.getPersona()
      .subscribe(data => {
        this.personas = data;
      })
  }

  editar(persona: Persona): void {
    localStorage.setItem("id", persona.id.toString());
  }

  public mostrar: boolean = true;
  public esconder: boolean = false;

  cambiarInput() {
    this.mostrar = !this.mostrar;
    this.esconder = !this.esconder;
    this.ngOnInit();
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}

