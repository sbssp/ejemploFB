import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/modelo/habilidades';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-index-skills',
  templateUrl: './index-skills.component.html',
  styleUrls: ['./index-skills.component.css']
})
export class IndexSkillsComponent implements OnInit {
  
  habilidades!:Habilidades[];


  constructor(private http:PortfolioService) { }

  

  
  ngOnInit(): void {
    this.http.getHabilidades()
    .subscribe(data=>{
      this.habilidades=data;
    });

  }

}
