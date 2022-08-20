package br.com.base.empresaapi.empresaapi.controllers;

import br.com.base.empresaapi.empresaapi.models.EmpresaModel;
import org.springframework.web.bind.annotation.*;
import br.com.base.empresaapi.empresaapi.modelviews.HomeModelViews;

import java.util.ArrayList;
import java.util.List;

@RestController
public class HomeController {

    @GetMapping("/")
    public HomeModelViews index(){
        return new HomeModelViews();
    }


}
