import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Rol } from 'src/app/models/rol';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario: Usuario= new Usuario();

  rol: Rol[] = [];

  constructor(private usuarioService:UsuarioService, private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.usuarioService.getRol()
      .subscribe(response => this.rol= response);

      this.activatedRoute.params
        .subscribe(params =>{
          let id_usuario: number = params['id_usuario'];
          if(id_usuario){
              this.usuarioService.obtenerUsuario(id_usuario)
                .subscribe(response => this.usuario = response);
        }
        })
  }

  crearUsuario(){
    this.usuarioService.crearUsuario(this.usuario)
        .subscribe(response =>{
          console.log("EXITO!")
          this.router.navigate(['/'])
        });

}

  actualizar(){
    this.usuarioService.actualizarUsuario(this.usuario)
      .subscribe(response => {
        console.log("ACTUALIZADO")
        this.router.navigate(['/'])
      });
  }

  compararRol(rol1:Rol,rol2:Rol){
    if (rol1==null||rol2==null){
    return false
    }
    return rol1.nombre===rol2.nombre;
  }
}
