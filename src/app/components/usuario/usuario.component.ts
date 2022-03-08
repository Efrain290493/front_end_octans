import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[]= [];

  constructor(private usuarioService: UsuarioService) { }
 
  ngOnInit(): void {
    this.usuarioService.getUsuario()
      .subscribe(response => {
        console.log(response)
        this.usuarios=response 
      });

      
      }

      eliminarUsuario(id_usuario: number){
        this.usuarioService.eliminarUsuario(id_usuario)
          .subscribe(response =>{
          this.usuarios = this.usuarios.filter(usuario => usuario.id_usuario != id_usuario);
          })
 
        }
}
