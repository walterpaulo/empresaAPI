import { environment } from './../../../environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class Empresa {
  public id?: Number;
  public nome?: String;
  public razaoSocial?: String;
  public email?: String;
  public cnpj?: String;
  public dataCriacao?: String;
  public dataAtualizacao?: String;
  constructor(private http: HttpClient) {}

  /*Modo feito com Async Await */
  public static async todos(http:HttpClient){
    return await http.get<Empresa[]>(`${environment.apihost}/empresas.json`).toPromise();
}
}
