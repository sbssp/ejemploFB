import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AcercadeComponent } from '../componentes/acercade/acercade.component';
import { Experiencia } from '../modelo/experiencia';
import { Persona } from '../modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {


  experiencias!:Experiencia[];
  personas!:Persona[];

  constructor(private http:HttpClient) {}

    Urlexp='http://localhost:8080/ver/experiencia';
    Urlexpadd='http://localhost:8080/new/experiencia';
    Urlpers='http://localhost:8080/ver/persona';

    
  getExpeiencia(){
    return this.http.get<Experiencia[]>(this.Urlexp);
  }

  getPersona(){
    return this.http.get<Persona[]>(this.Urlpers);
  }

  createExperiencia(experiencia:Experiencia){
    return this.http.post<Experiencia>(this.Urlexpadd, experiencia)
  }

}

