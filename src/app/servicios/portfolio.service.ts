import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AcercadeComponent } from '../componentes/acercade/acercade.component';
import { Experiencia } from '../modelo/experiencia';
import { Persona } from '../modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {


  experiencia!:Experiencia[];
  personas!:Persona[];

  constructor(private http:HttpClient) {}

    UrlExp='http://localhost:8080/ver/experiencia';
    UrlExpid='http://localhost:8080/buscar/experiencia';
    UrlExpEdit='http://localhost:8080/editar/experiencia';
    UrlExpDelete='http://localhost:8080/borrar/experiencia';
    UrlExpadd='http://localhost:8080/new/experiencia';


    Urlpers='http://localhost:8080/ver/persona';


 getPersona(){
    return this.http.get<Persona[]>(this.Urlpers);
  }

  getExpeiencia(){
    return this.http.get<Experiencia[]>(this.UrlExp);
  }

  createExperiencia(experiencia:Experiencia){
    return this.http.post<Experiencia>(this.UrlExpadd, experiencia);
  }

  getExperienciaId(id:number){
    return this.http.get<Experiencia>(this.UrlExpid+"/"+id);
  }

  editarExperiencia(experiencia:Experiencia){
    return this.http.put<Experiencia>(this.UrlExpEdit,experiencia);
  }

  borrarExperiencia(experiencia:Experiencia){
    return this.http.delete<Experiencia>(this.UrlExpDelete+"/"+experiencia.id);
  }


}

