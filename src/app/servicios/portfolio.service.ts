import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudios } from '../modelo/estudios';
import { Experiencia } from '../modelo/experiencia';
import { Habilidades } from '../modelo/habilidades';
import { Persona } from '../modelo/persona';
import { Proyectos } from '../modelo/proyectos';



@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  constructor(private http:HttpClient) {}

//Urls metodos Experiencia
private UrlExp='http://localhost:8080/ver/experiencia';
private UrlExpid='http://localhost:8080/buscar/experiencia';
private UrlExpEdit='http://localhost:8080/editar/experiencia';
private UrlExpDelete='http://localhost:8080/borrar/experiencia';
private UrlExpadd='http://localhost:8080/new/experiencia';

//Urls metodos Proyectos
private UrlProy='http://localhost:8080/ver/proyectos';
private UrlProyid='http://localhost:8080/buscar/proyectos';
private UrlProyEdit='http://localhost:8080/editar/proyectos';
private UrlProyDelete='http://localhost:8080/borrar/proyectos';
private Urlproyadd='http://localhost:8080/new/proyectos';

//Urls metodos Estudios
private UrlEst='http://localhost:8080/ver/estudios';
private UrlEstid='http://localhost:8080/buscar/estudios';
private UrlEstEdit='http://localhost:8080/editar/estudios';
private UrlEstDelete='http://localhost:8080/borrar/estudios';
private UrlEstadd='http://localhost:8080/new/estudios';

 //Urls metodos Habilidades
 private UrlSkills='http://localhost:8080/ver/habilidades';
 private UrlSkillsId='http://localhost:8080/buscar/habilidades';
 private UrlSkillsEdit='http://localhost:8080/editar/habilidades';
 private UrlSkillsDelete='http://localhost:8080/borrar/habilidades';
 private UrlSkillsAdd='http://localhost:8080/new/habilidades';


 //Urls metodos Persona
 private UrlPersona='http://localhost:8080/ver/persona';
 private UrlPersonaId='http://localhost:8080/buscar/persona';
 private UrlPersonaEdit='http://localhost:8080/editar/persona';
 //UrlPersonaDelete='http://localhost:8080/borrar/persona';
 //UrlPersonaAdd='http://localhost:8080/new/persona';

  //Metodos persona

   getPersona(){
    return this.http.get<Persona[]>(this.UrlPersona);
   }
    getPersonaId(id:number){
      return this.http.get<Persona>(this.UrlPersonaId+"/"+id);
    }
  
    editarPersona(persona:Persona){
      return this.http.put<Persona>(this.UrlPersonaEdit,persona);
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

  //Metodos Estudios
  getEstudios(){
    return this.http.get<Estudios[]>(this.UrlEst);
  }

  createEstudios(estudios:Estudios){
    return this.http.post<Estudios>(this.UrlEstadd, estudios);
  }

  getEstudiosId(id:number){
    return this.http.get<Estudios>(this.UrlEstid+"/"+id);
  }

  editarEstudios(estudios:Estudios){
    return this.http.put<Estudios>(this.UrlEstEdit,estudios);
  }

  borrarEstdusios(estudios:Estudios){
    return this.http.delete<Estudios>(this.UrlEstDelete+"/"+estudios.id);
  }

  //Metodos Skills
  getHabilidades(){
    return this.http.get<Habilidades[]>(this.UrlSkills);
  }

  createHabilidades(habilidad:Habilidades){
    return this.http.post<Habilidades>(this.UrlSkillsAdd, habilidad);
  }

  getHabilidadesId(id:number){
    return this.http.get<Habilidades>(this.UrlSkillsId+"/"+id);
  }

  editarHabilidades(habilidad:Habilidades){
    return this.http.put<Habilidades>(this.UrlSkillsEdit,habilidad);
  }

  borrarHabilidades(habilidad:Habilidades){
    return this.http.delete<Habilidades>(this.UrlSkillsDelete+"/"+habilidad.id);
  }


}

