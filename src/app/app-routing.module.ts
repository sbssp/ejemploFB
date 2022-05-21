import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioExpComponent } from './componentes/experiencia/formulario-exp/formulario-exp.component';

const routes: Routes = [

  {path:'agregarexp', component:FormularioExpComponent},
  {path:'home', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ArrayOfComponents = [FormularioExpComponent]
