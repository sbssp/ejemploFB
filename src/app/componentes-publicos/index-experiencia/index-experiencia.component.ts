import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelo/experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-index-experiencia',
  templateUrl: './index-experiencia.component.html',
  styleUrls: ['./index-experiencia.component.css']
})
export class IndexExperienciaComponent implements OnInit {


  experiencias!:Experiencia[];
  
  constructor(private http:PortfolioService ) { }


  //Métodos html
  ngOnInit(): void {
    this.http.getExpeiencia()
    .subscribe(data=>{
      this.experiencias=data; 
    });
  }

    }
