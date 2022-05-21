import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/experiencia';
import { Persona } from 'src/app/modelo/persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-formulario-exp',
  templateUrl: './formulario-exp.component.html',
  styleUrls: ['./formulario-exp.component.css']
})
export class FormularioExpComponent implements OnInit {

 
  experiencia!:Experiencia[];

  //Formulario 
  public formExp!:FormGroup;

  constructor(private http:PortfolioService, private router:Router ) { }

  ngOnInit(): void {
    this.http.getExpeiencia()
    .subscribe(data=>{
      this.experiencia=data;
    })


//Formulario de carga experiencia
    this.formExp = new FormGroup({
      puesto: new FormControl(''),
      empresa: new FormControl(''),
      descripcion: new FormControl(''),
      fecha_desde:new FormControl(''),
      fecha_hasta:new FormControl(''),
      icono: new FormControl('')

    });
  }

  
  Guardar(experiencia:Experiencia){
    this.http.createExperiencia(experiencia).subscribe(data=>{
      alert("Se agrego con Exito!!");
    })
  }
  
}
