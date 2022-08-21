import { environment } from './../../environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getEmpresas(): Observable<Empresa[]> {
    return this.httpClient
      .get<Empresa[]>(environment.apihost + `/empresas`)
      .pipe(retry(2), catchError(this.handleError));
  }

  saveEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.httpClient
      .post<Empresa>(
        environment.apihost + `/empresas`,
        JSON.stringify(empresa),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  updateEmpresa(empresa: Empresa): Observable<Empresa> {
    empresa.dataCriacao = '';
    empresa.dataAtualizacao = '';
    return this.httpClient
      .put<Empresa>(
        environment.apihost + `/empresas` + '/' + empresa.id,
        JSON.stringify(empresa),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  getEmpresaPorId(id: number): Observable<Empresa> {
    return this.httpClient
      .get<Empresa>(environment.apihost + `/empresas` + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  excluirEmpresa(empresa: Empresa) {
    return this.httpClient
      .delete<Empresa>(
        environment.apihost + `/empresas` + '/' + empresa.id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
