import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-index-acercade',
  templateUrl: './index-acercade.component.html',
  styleUrls: ['./index-acercade.component.css']
})
export class IndexAcercadeComponent implements OnInit {


  personas!:Persona[];
  
  constructor(private http:PortfolioService) { }

  ngOnInit(): void {
    this.http.getPersona()
    .subscribe(data=>{
    this.personas=data;
    })
  }


}

