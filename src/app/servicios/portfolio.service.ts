import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../modelo/estudios';
import { Experiencia } from '../modelo/experiencia';
import { Habilidades } from '../modelo/habilidades';
import { Persona } from '../modelo/persona';
import { Proyectos } from '../modelo/proyectos';


const API_URL = 'http://localhost:8080/api/test';

@Injectable({
  providedIn: 'root'
})


export class PortfolioService {

  constructor(private http:HttpClient) {}

  //Metodos persona


  getPersona(): Observable<any> {
    return this.http.get(API_URL + '/ver/persona', { responseType: 'json' });  
  }
  getExpeiencia(): Observable<any> {
    return this.http.get(API_URL + '/ver/experiencia', { responseType: 'json' });  
  }
  getProyectos(): Observable<any> {
    return this.http.get(API_URL + '/ver/proyectos', { responseType: 'json' });  
  }
  getEstudios(): Observable<any> {
    return this.http.get(API_URL + '/ver/estudios', { responseType: 'json' });  
  }
  getHabilidades(): Observable<any> {
    return this.http.get(API_URL + '/ver/habilidades', { responseType: 'json' });  
  }


   
    getPersonaId(id:number){
      return this.http.get<Persona>(API_URL + '/buscar/persona' + "/"+id);
    }
  
    editarPersona(persona:Persona){
      return this.http.put<Persona>(API_URL + '/editar/persona', persona);  
    }
  

  //Metodos experiencia
 
  createExperiencia(experiencia:Experiencia){
    return this.http.post<Experiencia>(API_URL + '/new/experiencia', experiencia);
  }

  getExperienciaId(id:number){
    return this.http.get<Experiencia>(API_URL+ '/buscar/experiencia' +"/"+id);
  }

  editarExperiencia(experiencia:Experiencia){
    return this.http.put<Experiencia>(API_URL + '/editar/experiencia',experiencia);
  }

  borrarExperiencia(experiencia:Experiencia){
    return this.http.delete<Experiencia>(API_URL + '/borrar/experiencia' +"/"+experiencia.id);
  }

  //Metodos Proyectos

  createProyectos(proyecto:Proyectos){
    return this.http.post<Proyectos>(API_URL + '/new/proyectos', proyecto);
  }

  getProyectoId(id:number){
    return this.http.get<Proyectos>(API_URL+ '/buscar/proyectos' +"/"+id);
  }

  editarProyecto(proyecto:Proyectos){
    return this.http.put<Proyectos>(API_URL + '/editar/proyectos',proyecto);
  }

  borrarProyecto(proyecto:Proyectos){
    return this.http.delete<Proyectos>(API_URL + '/borrar/proyectos' +"/"+proyecto.id);
  }

  //Metodos Estudios

  createEstudios(estudio:Estudios){
    return this.http.post<Estudios>(API_URL + '/new/estudios', estudio);
  }

  getEstudiosId(id:number){
    return this.http.get<Estudios>(API_URL+ '/buscar/estudios' +"/"+id);
  }

  editarEstudios(estudio:Estudios){
    return this.http.put<Estudios>(API_URL + '/editar/estudios',estudio);
  }

  borrarEstudios(estudio:Estudios){
    return this.http.delete<Estudios>(API_URL + '/borrar/estudios' +"/"+estudio.id);
  }

  //Metodos Skills


  createHabilidades(habilidad:Habilidades){
    return this.http.post<Habilidades>(API_URL + '/new/habilidades', habilidad);
  }

  getHabilidadesId(id:number){
    return this.http.get<Habilidades>(API_URL+ '/buscar/habilidades' +"/"+id);
  }

  editarHabilidades(proyecto:Habilidades){
    return this.http.put<Habilidades>(API_URL + '/editar/habilidades',proyecto);
  }

  borrarHabilidades(habilidad:Habilidades){
    return this.http.delete<Habilidades>(API_URL + '/borrar/habilidades' +"/"+ habilidad.id);
  }


}

