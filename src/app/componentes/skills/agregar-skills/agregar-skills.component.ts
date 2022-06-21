import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Habilidades } from 'src/app/modelo/habilidades';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-agregar-skills',
  templateUrl: './agregar-skills.component.html',
  styleUrls: ['./agregar-skills.component.css']
})
export class AgregarSkillsComponent implements OnInit {


  habilidad = new Habilidades();

  constructor(private http: PortfolioService) { }

  ngOnInit() {

  }

  guardarHabilidad(habilidad: Habilidades) {
    this.http.createHabilidades(habilidad)
      .subscribe(data => {
        this.refrescar();
      })
  }

  @Output() switchAg: EventEmitter<string> = new EventEmitter();
  refrescar() {
    this.switchAg.emit();
  }

  btnHide: boolean = false;
  btnClicked: boolean = true;

  btnCarga() {
    this.btnHide = !this.btnHide;
    this.btnClicked = !this.btnClicked;
  }

}







