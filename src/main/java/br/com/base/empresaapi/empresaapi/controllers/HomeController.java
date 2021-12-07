package br.com.base.empresaapi.empresaapi.controllers;

import br.com.base.empresaapi.empresaapi.models.EmpresaModel;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class HomeController {

    @GetMapping("/empresas")
    public List<EmpresaModel> index(){
        List<EmpresaModel> empresa = new ArrayList<>();
        empresa.add(new EmpresaModel());
        empresa.add(new EmpresaModel());
        empresa.add(new EmpresaModel());
        empresa.add(new EmpresaModel());
        empresa.add(new EmpresaModel());
     return empresa;
    }

    @GetMapping("/empresas/{id}")
    public EmpresaModel show(@PathVariable int id){
        EmpresaModel empresa = new EmpresaModel();
        empresa.setId(1);
        return empresa;
    }

    @PostMapping("/empresas")
    public EmpresaModel create(@RequestBody EmpresaModel empresa){
        return empresa;
    }
    @PutMapping("/empresas/{id}")
    public EmpresaModel update(@PathVariable int id,@RequestBody EmpresaModel empresa){
        return empresa;
    }
    @DeleteMapping("/empresas/{id}")
    public EmpresaModel delete(@RequestBody EmpresaModel empresa){
        return new EmpresaModel();
    }
}
