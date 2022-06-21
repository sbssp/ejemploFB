import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-editar-acercade',
  templateUrl: './editar-acercade.component.html',
  styleUrls: ['./editar-acercade.component.css']
})
export class EditarAcercadeComponent implements OnInit {

  persona: Persona = new Persona();

  constructor(private http: PortfolioService) { }

  ngOnInit(): void {
    this.recibirId();
  }

  recibirId() {
    let id: any = localStorage.getItem("id");
    this.http.getPersonaId(id)
      .subscribe(data => {
        this.persona = data;
      })
  }

  actualizarPersona(persona: Persona) {
    this.http.editarPersona(this.persona)
      .subscribe(data => {
        this.persona = data;
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