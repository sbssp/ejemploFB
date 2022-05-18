import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FormularioExpComponent } from './componentes/experiencia/formulario-exp/formulario-exp.component';

const routes: Routes = [

  {path:'agregarexp', component:FormularioExpComponent},
  {path:'editarexp', component:FormularioExpComponent},
  {path:'borrarexp', component:ExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
