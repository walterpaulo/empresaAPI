package br.com.base.empresaapi.empresaapi.repositorys;

import br.com.base.empresaapi.empresaapi.models.EmpresaModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpresaRepo extends CrudRepository<EmpresaModel, Integer> {

}
