import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7294/api/Usuarios'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getRegistros(): Observable<any[]> {
    console.log(this.apiUrl);
    return this.http.get<any[]>(this.apiUrl);
  }

  // Agregar métodos para crear, actualizar y eliminar registros
}
