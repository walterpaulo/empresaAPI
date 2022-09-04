import { EmpresaModule } from './views/empresa/empresa.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './views/empresa/empresa.component';
import { IMaskModule } from 'angular-imask';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ReactiveFormsModule,
    IMaskModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EmpresaModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
