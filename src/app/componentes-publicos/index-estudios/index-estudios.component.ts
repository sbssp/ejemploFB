import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/modelo/estudios';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-index-estudios',
  templateUrl: './index-estudios.component.html',
  styleUrls: ['./index-estudios.component.css']
})
export class IndexEstudiosComponent implements OnInit {

  constructor(private http: PortfolioService) { }

  estudios!: Estudios[];

  ngOnInit(): void {
    this.http.getEstudios()
      .subscribe(data => {
        this.estudios = data;
      });
  }
}
