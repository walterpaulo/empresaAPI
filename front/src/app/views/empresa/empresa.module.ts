import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { EmpresaComponent } from './empresa.component';
import { EmpresaFormModule } from './empresa-form/empresa-form.module';
import { FormDebugComponent } from './../shared/form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {IMaskModule} from 'angular-imask';

@NgModule({
  declarations: [
    FormDebugComponent,
    EmpresaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmpresaFormModule,
    IMaskModule
  ],
  exports: [
    EmpresaComponent
  ]
})
export class EmpresaModule { }
