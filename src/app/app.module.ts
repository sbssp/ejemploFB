import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AgregarExp } from './componentes/experiencia/agergar-exp/agregar-exp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarExpComponent } from './componentes/experiencia/editar-exp/editar-exp.component';
import { AgregarEstComponent } from './componentes/estudios/agregar-est/agregar-est.component';
import { EditarEstComponent } from './componentes/estudios/editar-est/editar-est.component';
import { EditarAcercadeComponent } from './componentes/acercade/editar-acercade/editar-acercade.component';
import { AgregarProyComponent } from './componentes/proyectos/agregar-proy/agregar-proy.component';
import { EditarProyComponent } from './componentes/proyectos/editar-proy/editar-proy.component';
import { AgregarSkillsComponent } from './componentes/skills/agregar-skills/agregar-skills.component';
import { EditarSkillsComponent } from './componentes/skills/editar-skills/editar-skills.component';
import { IndexComponent } from './contenedores/index/index.component';
import { AdminPanelComponent } from './contenedores/admin-panel/admin-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { IndexAcercadeComponent } from './componentes-publicos/index-acercade/index-acercade.component';
import { IndexExperienciaComponent } from './componentes-publicos/index-experiencia/index-experiencia.component';
import { IndexEstudiosComponent } from './componentes-publicos/index-estudios/index-estudios.component';
import { IndexSkillsComponent } from './componentes-publicos/index-skills/index-skills.component';
import { IndexProyectosComponent } from './componentes-publicos/index-proyectos/index-proyectos.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EstudiosComponent,
    SkillsComponent,
    ProyectosComponent,
    AgregarExp,
    EditarExpComponent,
    AgregarEstComponent,
    EditarEstComponent,
    EditarAcercadeComponent,
    AgregarProyComponent,
    EditarProyComponent,
    AgregarSkillsComponent,
    EditarSkillsComponent,
    IndexComponent,
    AdminPanelComponent,
    LoginComponent,
    RegisterComponent,
    IndexAcercadeComponent,
    IndexExperienciaComponent,
    IndexEstudiosComponent,
    IndexSkillsComponent,
    IndexProyectosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule

  ],
  
  providers: [authInterceptorProviders, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  



}