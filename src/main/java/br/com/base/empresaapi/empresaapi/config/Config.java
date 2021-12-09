package br.com.base.empresaapi.empresaapi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class Config implements WebMvcConfigurer {

//    @Override
    public void addResoucHandlers(ResourceHandlerRegistry registry){
        registry.addResourceHandler("/api/**").addResourceLocations("classpath:/api/");
    }

}
