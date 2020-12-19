import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../src/environments/environment';
import { MenuModel, ApiResponse } from '../models/menu';
import { Cliente } from '../models/clientes';
import { NotificacionesModel } from '../models/notificaciones';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
}) 
export class MenuService {
  /* apiUrl = environment.apiUrlDashoard; */
  private url : string;
  private url1 : string;
  private url2 : string;
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { 
    this.url = environment.apiUrlDashoard +  'menu-users';
    this.url1 = environment.apiUrlDashoard +  'notificaciones';
    this.url2 = environment.apiUrlDashoard +  'clientes';
  }

  dataCliente: any; 
  /* getMenusPorRol(idRolUsuario): Observable<MenuModel[]> {
    return this.httpClient.get<MenuModel[]>(this.url1 + 'rol/' + idRolUsuario);
  } */


  getMenuByIdRol(idRol:number) : Observable<MenuModel[]>{
    const url = `${this.url}/rol/${idRol}`;
    console.log(url);
    return this.httpClient.get<MenuModel[]>(url)      
  }

  getClientUsersData(idCliente:number) : Observable<MenuModel[]>{
    const url1 = `${this.url1}/client/${idCliente}`;
    console.log(url1);
    return this.httpClient.get<MenuModel[]>(url1);      
  }

  getClient(id:number) : Observable<MenuModel[]>{
    const url = `${this.url}/usuario/${id}`;
    console.log(url);
    return this.httpClient.get<MenuModel[]>(url);      
  }

  getPaises() : Observable<MenuModel[]>{
    const url = `${this.url}/paises`;
    console.log(url);
    return this.httpClient.get<MenuModel[]>(url);      
  }

  updateCliente(id: number, updatedCliente: Cliente): Observable<Cliente> {
    const url2 = `${this.url2}/${id}`;
    console.log('esta es la url:', url2);
    return this.httpClient.put(url2, updatedCliente);
    
  }


}