import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent{

  constructor() { }

  /*abrirDialogo(): void {
    const dialogRef = this.dialog.open(EditarDialogoComponent, {
      width: '400px', // Personaliza el ancho según tus necesidades
      data: { /* Pasar datos necesarios si es necesario */ //}
    //});
  
    /*dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Realiza una solicitud PUT a la API con los datos actualizados
        // Ejemplo: this.apiService.actualizarRegistro(result).subscribe(...);
      }
    });*/
  //}

  /*ngOnInit(): void {
  }*/

}
