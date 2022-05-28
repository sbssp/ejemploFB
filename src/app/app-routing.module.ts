import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { IndexComponent } from './contenedores/index/index.component';


const routes: Routes = [

  {path:'', component:IndexComponent},
  {path:'home', component:IndexComponent},
  {path:'login', component:LoginComponent},
 //{ path: '**', component: 404Component },  



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




