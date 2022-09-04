import { Empresa } from 'src/app/models/empresa';
import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

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
  form?: FormGroup;

  constructor(
    private empresaService: EmpresaService,
    private formBuild: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getEmpresas();
  }

  profileForm = this.formBuild.group({
    nome: ['', Validators.required],
    razaoSocial: ['', Validators.required],
    email: [
      '',
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ],
    cnpj: ['', Validators.required],
  });

  // enviar(){
  //   let formObj = this.profileForm.getRawValue();
  //   if (this.empresa.id !== undefined) {
  //     this.empresaService.updateEmpresa(formObj).subscribe(() => {
  //       this.messagem = 'Aterado com sucesso!';
  //       setTimeout(() => (this.messagem = ''), 2000);
  //     });
  //     this.cleanForm();
  //   } else {
  //     this.empresaService.saveEmpresa(formObj).subscribe(() => {
  //     });
  //     this.cleanForm();
  //   }
  //   console.warn(this.profileForm.value);
  // }

  getEmpresas() {
    this.empresaService.getEmpresas().subscribe((listempresas: Empresa[]) => {
      this.empresas = listempresas;
    });
  }

  saveEmpresa() {
    let formObj: Empresa = this.profileForm.getRawValue();
    if (this.empresa.id !== undefined) {
      formObj.id = this.empresa.id;
      this.empresaService.updateEmpresa(formObj).subscribe(() => {
        this.showMessage('Alterado com sucesso!');
        this.getEmpresas();
        this.cleanForm();
      });
    } else {
      this.empresaService.saveEmpresa(formObj).subscribe(() => {
        this.showMessage('Adicionado com sucesso!');
        this.getEmpresas();
        this.cleanForm();
      });
    }
  }

  excluirEmpresa(empresa: Empresa) {
    this.empresaService.excluirEmpresa(empresa).subscribe(() => {
      this.showMessage('Excluído com sucesso', 'danger')
      empresa;
      this.getEmpresas();
    });
  }

  editarEmpresa(empresa: Empresa) {
    console.log(empresa);
    this.empresa = { ...empresa };
  }

  cleanForm() {
    this.profileForm.get('nome')?.setValue(''),
      this.profileForm.get('razaoSocial')?.setValue(''),
      this.profileForm.get('email')?.setValue(''),
      this.profileForm.get('cnpj')?.setValue(''),
      (this.empresa = {} as Empresa);
  }

  converterDate(data: String): string {
    const [dataObjeto, timeObjeto] = data.split(' ');
    const [ano, mes, dia] = dataObjeto.split('-');
    const [horas, minutos, secondos] = timeObjeto.split(':');
    return (
      dia + '/' + mes + '/' + ano + ' ' + horas + ':' + minutos + ':' + secondos
    );
  }

  showMessage(messagem: string, status: string = 'success') {
    this.status = status;
    this.messagem = messagem;
    setTimeout(() => (this.messagem = ''), 7000);
  }
}
