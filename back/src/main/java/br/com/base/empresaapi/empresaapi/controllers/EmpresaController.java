package br.com.base.empresaapi.empresaapi.controllers;

import br.com.base.empresaapi.empresaapi.models.EmpresaModel;
import br.com.base.empresaapi.empresaapi.repositorys.EmpresaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class EmpresaController {
    @Autowired
    private EmpresaRepo repo;

    @GetMapping("/empresas")
    public List<EmpresaModel> index() {
        List<EmpresaModel> empresa = (List<EmpresaModel>) repo.findAll();
        return empresa;
    }

    @GetMapping("/empresas/{id}")
    public ResponseEntity<EmpresaModel> show(@PathVariable int id) {
        if (!repo.existsById(id)) {
            return ResponseEntity.status(404).build();
        }
        EmpresaModel empresa = repo.findById(id).get();
        return ResponseEntity.ok(empresa);
    }

    @PostMapping("/empresas")
    public EmpresaModel create(@RequestBody EmpresaModel empresa, HttpServletResponse response) {
        try {
            repo.save(empresa);
        } catch (Exception err) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
        return empresa;
    }


    @PutMapping("/empresas/{id}")
    public ResponseEntity<EmpresaModel> update(@PathVariable int id, @RequestBody EmpresaModel empresa, HttpServletResponse response){
        try {
        	if (!repo.existsById(id)) {
        		return ResponseEntity.status(404).build();
        	}
        	Optional<EmpresaModel> empresaAtual = repo.findById(id);
        	empresa.setId(id);
        	empresa.setDataCriacao(empresaAtual.get().getDataCriacao());
        	empresa.setDataAtualizacao(empresa.getAtualizado());
        	repo.save(empresa);
        	return ResponseEntity.status(204).build();
			
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}	
        return ResponseEntity.status(204).body(empresa);
    }
    @DeleteMapping("/empresas/{id}")
    public ResponseEntity<EmpresaModel> delete(@PathVariable int id){
        if (!repo.existsById(id)) {
            return ResponseEntity.status(404).build();
        }
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
