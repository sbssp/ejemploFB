import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarSkillsComponent } from './componentes/skills/editar-skills/editar-skills.component';
import { AdminPanelComponent } from './contenedores/admin-panel/admin-panel.component';
import { IndexComponent } from './contenedores/index/index.component';


const routes: Routes = [

  {path:'home', component:IndexComponent},
  {path:'admin', component:AdminPanelComponent},
 //{ path: '**', component: 404Component },  
 {path:'editarHab', component:EditarSkillsComponent},



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




