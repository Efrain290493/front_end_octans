import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string= 'http://localhost:8080/api/usuarios';
  
  constructor(private http: HttpClient) { }

  getUsuario(): Observable <Usuario[]>{
  return this.http.get<Usuario[]>(this.url+ '/listar');  
  }
  getRol(): Observable <Rol[]>{
    return this.http.get<Rol[]>(this.url+ '/rol');  
  } 
  crearUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.url+'/crear', usuario);
    
    
  }
  obtenerUsuario(id_usuario: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.url+'/' + id_usuario);
  }

  actualizarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(this.url+'/actualizar/' +usuario.id_usuario, usuario);
  }

  eliminarUsuario(id_usuario:number): Observable<any>{
    return this.http.delete<any>(this.url+ '/eliminar/'+ id_usuario)
  }
}
