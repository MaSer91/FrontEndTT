import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  registros: any[] = [];

  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.obtenerRegistros();
  }

  obtenerRegistros(): void {
    this.apiService.getRegistros()
      .subscribe(data => {
        this.registros = data;
      });
  }

  editarRegistro(user: any): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Realizar acciones después de cerrar el popup, por ejemplo, actualizar la tabla.
    });
  }
  // Agregar métodos para crear, actualizar y eliminar registros
}
