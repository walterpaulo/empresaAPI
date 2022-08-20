# empresaAPI

### Tecnologias
* Java 11 <;
* Spring Boot 2.6;
* Mysql;
* Docker

#### Limpa dependencias
````
mvn clean
ou
./mvnw spring-boot:run
````

#### Cria o pacote jar
````
mvn package
ou
./mvnw package
````

#### Inicia o projeto
````
mvn spring-boot:run
ou
./mvnw spring-boot:run
````
#### Acessar swagger (UI)

````
http://localhost:8080/swagger-ui/index.html
````

#### Acessar swagger (JSon)

````
http://localhost:8080/v3/api-docs
````

#### Bando de Dados

Iniciar

```s
docker-compose up -d
```

Desligar

```s
docker-compose down
``

