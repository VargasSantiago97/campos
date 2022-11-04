import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { SociosComponent } from './components/socios/socios.component';

const routes: Routes = [
  { path:"", redirectTo:"/inicio", pathMatch:'full'},
  { path:"inicio", component: InicioComponent},
  { path:"socios", component: SociosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
