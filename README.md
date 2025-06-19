# Visão Geral

Aplicação de forma geral é para fazer manipulação de informações de Pokemon, onde podemos fazer a criação de Pokemons e seus tipos, nesta linha de racionio temos algumas funcionalidades primarias que são:

- Listar
- Criar
- Atualizar
- Deletar

#### Parte Técnica

Projeto é o Back-end de API Rest, onde utilizamos uma arquitetura em **Camadas** sendo Dto,Repository, Service, Controller, Routes, utilizando **TypeScript**, **Express** e **Prisma** para fazer a abstração do serviço de banco de dados.

#### Preparando Ambiente

##### Passo 1:

É necessário e iniciar o container de banco de dados localizado na pasta de `./infra/postgres` do projeto, onde levantando o serviço de banco de dados postgres, fazemos as configurações de variáveis de ambiente no arquivo .env, seguindo o arquivo de exemplo.

para levantar o container rodamos o comando `docker compose up -d`

##### Passo 02:

com o container em pé rodamos o comando de `yarn prisma migrate dev` para deixar a base de dados atualizada

##### Passo 03:

Para a base de dados ficar pronta pra uso temos 2 arquivos no caminho `/database`, onde pode copiar as informações e usar a Rota de POST Create many, de ambas as tabelas.

#### Rodando aplicação.

Utilizando o seguinte comando para rodar a aplicação `yarn dev`

#### Front-end.

o Front-end da aplicação estará disponibilizado em [Repositório Frontend](https://github.com/schandon/web_pokedex)

### Rotas

#### 🐦‍🔥Pokemons

##### GET

- `/pokemon` - Lista Todos os Pokemons
- `/pokemon/12` - Lista o Pokemon do ID escolhido

##### POST

- `/pokemon` - Cria um pokemon, necessário passar no body informação de ID, Name, Tipos
  ```json
  {
    "id": "1",
    "name": "gabiru",
    "fk_tipo_primario": "voador"
  }
  ```
  }
- `/pokemon/many` - Cria mais de um Pokemon, necessário passar no body informação de ID, Name
  ```json
  {
  "pokemon":[
    {
    "id":"1",
    "name":"gabiru Alado",
    "fk_tipo_primario":1
    },
    {
    "id":"2",
    "name":"gabiru do Mar",
    "fk_tipo_primario":2
    }
  ]
  ```

##### PUT

- `/pokemon/1` - Atualiza as informações que já estão criadas na base.

  ```json
  {
  "name":"gabiru @lado",
  "fk_tipo_primario":3
  },
  ```

##### DELETE

- `/pokemon/1` - Deleta as informações que foram criadas na base.

#### 🗂️Tipos

##### GET

- `/type` - Lista Todos os tipo
- `/type/12` - Lista o tipo do ID escolhido

##### POST

- `/types` - Cria um tipo, necessário passar no body informação de ID, Name
  ```json
  {
    "id": "1",
    "name": "voador"
  }
  ```
  }
- `/types/many` - Cria mais de um tipo, necessário passar no body informação de ID, Name

  ```json
  {
  "types":[
    {
    "id":"1",
    "name":"voador",

    },
    {
    "id":"2",
    "name":"Dragão",

    }
  ]
  ```

##### PUT

- `/types/1` - Atualiza as informações que já estão criadas na base.

  ```json
  {
  "name":"gabiru @lado",
  },
  ```

##### DELETE

- `/types/1` - Deleta as informações que foram criadas na base.
