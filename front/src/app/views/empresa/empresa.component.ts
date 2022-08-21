import { Empresa } from 'src/app/models/empresa';
import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
})
export class EmpresaComponent implements OnInit {
  empresa = {} as Empresa;
  empresas?: Empresa[];
  messagem? = '';
  status? = 'success';

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas() {
    this.empresaService.getEmpresas().subscribe((listempresas: Empresa[]) => {
      this.empresas = listempresas;
    });
  }

  saveEmpresa(form: NgForm) {
    if (this.empresa.id !== undefined) {
      this.empresaService.updateEmpresa(this.empresa).subscribe(() => {
        this.messagem = 'Aterado com sucesso!';
        setTimeout(() => (this.messagem = ''), 2000);
        this.cleanForm(form);
      });
    } else {
      this.empresaService.saveEmpresa(this.empresa).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  excluirEmpresa(empresa: Empresa) {
    this.empresaService.excluirEmpresa(empresa).subscribe(() => {
      empresa;
      this.getEmpresas();
    });
  }

  editarEmpresa(empresa: Empresa) {
    this.empresa = { ...empresa };
  }

  cleanForm(form: NgForm) {
    this.getEmpresas();
    form.resetForm();
    this.empresa = {} as Empresa;
  }

  converterDate(data: String): string {
    const [dataObjeto, timeObjeto] = data.split(' ');
    const [ano, mes, dia] = dataObjeto.split('-');
    const [horas, minutos, secondos] = timeObjeto.split(':');
    return (
      dia + '/' + mes + '/' + ano + ' ' + horas + ':' + minutos + ':' + secondos
    );
  }
}
