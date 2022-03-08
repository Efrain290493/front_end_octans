import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
{path: '', component: UsuarioComponent},
{path: 'formulario', component:UsuarioFormComponent},
{path: 'formulario/:id_usuario', component: UsuarioFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
