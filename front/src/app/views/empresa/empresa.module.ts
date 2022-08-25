import { FormDebugComponent } from './../shared/form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { EmpresaComponent } from './empresa.component';



@NgModule({
  declarations: [
    FormDebugComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpresaModule { }
