import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Experiencia } from 'src/app/modelo/experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {


  experiencia: Experiencia = new Experiencia();

  constructor(private http: PortfolioService) { }

  ngOnInit(): void {

    this.recibirId();

  }


  recibirId() {
    let id: any = localStorage.getItem("id");
    this.http.getExperienciaId(id)
      .subscribe(data => {
        this.experiencia = data;
      })
  }

  actualizarExp(experiencia: Experiencia) {
    this.http.editarExperiencia(this.experiencia)
      .subscribe(data => {
        this.experiencia = data;
        this.refrescar();
      })
  }

  @Output() switchEd: EventEmitter<string> = new EventEmitter();
  refrescar() {
    this.switchEd.emit();
  }

  btnHide: boolean = false;
  btnClicked: boolean = true;

  btnCarga() {
    this.btnHide = !this.btnHide;
    this.btnClicked = !this.btnClicked;
  }
}


