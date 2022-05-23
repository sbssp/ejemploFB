import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AcercadeComponent } from '../componentes/acercade/acercade.component';
import { Experiencia } from '../modelo/experiencia';
import { Persona } from '../modelo/persona';
import { Proyectos } from '../modelo/proyectos';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {


  experiencia!:Experiencia[];
  personas!:Persona[];

  constructor(private http:HttpClient) {}

  //Urls metodos Experiencia
    UrlExp='http://localhost:8080/ver/experiencia';
    UrlExpid='http://localhost:8080/buscar/experiencia';
    UrlExpEdit='http://localhost:8080/editar/experiencia';
    UrlExpDelete='http://localhost:8080/borrar/experiencia';
    UrlExpadd='http://localhost:8080/new/experiencia';

  //Urls metodos Proyectos
    UrlProy='http://localhost:8080/ver/proyectos';
    UrlProyid='http://localhost:8080/buscar/proyectos';
    UrlProyEdit='http://localhost:8080/editar/proyectos';
    UrlProyDelete='http://localhost:8080/borrar/proyectos';
    Urlproyadd='http://localhost:8080/new/proyectos';

    Urlpers='http://localhost:8080/ver/persona';


 getPersona(){
    return this.http.get<Persona[]>(this.Urlpers);
  }

  //Metodos experiencia
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

  //Metodos Proyectos
  getProyectos(){
    return this.http.get<Proyectos[]>(this.UrlProy);
  }

  CreateProyectos(proyecto:Proyectos){
    return this.http.post<Proyectos>(this.Urlproyadd, proyecto);
  }

  getProyectosId(id:number){
    return this.http.get<Proyectos>(this.UrlProyid+"/"+id);
  }

  editarProyectos(proyecto:Proyectos){
    return this.http.put<Proyectos>(this.UrlProyEdit,proyecto);
  }

  borrarProyectos(proyecto:Proyectos){
    return this.http.delete<Proyectos>(this.UrlProyDelete+"/"+proyecto.id);
  }


}

