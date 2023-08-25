import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaUsuariosComponent,
    EditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
