import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListCuestionsComponent } from './components/list-cuestions/list-cuestions.component';
import { DatosService } from './services/datos.service';
import { CuestionComponent } from './components/cuestion/cuestion.component';
import { PlusCuestionsComponent } from './components/plus-cuestions/plus-cuestions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListCuestionsComponent,
    CuestionComponent,
    PlusCuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
