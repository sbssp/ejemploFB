import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from './servicios/portfolio.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PortfolioService]
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private router:Router){}

  agregarExp(){
  this.router.navigate([this.agregarExp]);

  }
}


