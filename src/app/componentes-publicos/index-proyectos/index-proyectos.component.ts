import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/modelo/proyectos';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-index-proyectos',
  templateUrl: './index-proyectos.component.html',
  styleUrls: ['./index-proyectos.component.css']
})
export class IndexProyectosComponent implements OnInit {

  proyecto!: Proyectos[];

  constructor(private http: PortfolioService) { }


  //Métodos html
  ngOnInit(): void {
    this.http.getProyectos()
      .subscribe(data => {
        this.proyecto = data;
      });
  }

}
