import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminPanelComponent } from './contenedores/admin-panel/admin-panel.component';
import { IndexComponent } from './contenedores/index/index.component';


const routes: Routes = [

  {path:'home', component:IndexComponent},
 //{ path: '**', component: 404Component },  
 { path: 'login', component: LoginComponent },
 //{ path: 'register', component: RegisterComponent },
 { path: 'admin', component: AdminPanelComponent },
 { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




