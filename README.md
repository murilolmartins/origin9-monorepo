# Origin9-MONOREPO

O repositorio contem os seguintes apps:

- `server`: API REST com Express - NodeJS e Typescript
- `web`: Frontend web - NextJS e Typescript

Para iniciar o projeto voce deve ter o node e o yarn instalados.

execute o comando para instalar as dependencias:

    yarn install

# Iniciar o server:

- Criar um arquivo `.env.development` na raiz do projeto `server` com as seguintes variaveis de ambiente:

  - `APP_PORT`: Porta em que o servidor ira rodar
  - `DATABASE_URL`: String de conexão com o banco de dados com o schema public

- Criar um arquivo `.env.development.test` na raiz do projeto `server` com as seguintes variaveis de ambiente:

  - `APP_PORT`: Porta em que o servidor ira rodar
  - `DATABASE_URL`: String de conexão com o banco de dados com o schema `test`

  A string de conexão com o banco de dados esta no `.env.example` do projeto `server`. Caso voce deseje alterar as variaveis no `docker-compose.yml` do projeto `server` voce deve alterar tambem no `.env.example`.

- Instalar o docker e o docker-compose em sua maquina e rodar o comando `yarn server docker:up`. Esse comando ira iniciar um container com o banco de dados postgres.

- Rodar o comando `yarn server migrate:dev` e `yarn server migrate:test` para criar as tabelas no banco de dados.

- Rodar o comando `yarn server seed:db` para popular o banco de dados com dados.

# Iniciar o web:

- Criar um arquivo `.env` na raiz do projeto `web` com as seguintes variaveis de ambiente:

  - `NEXT_PUBLIC_API_URL`: Url da API REST

# Comandos de inicialização dos apps

- Iniciar todos os apps

  yarn dev:all

- Testar todos os apps

  yarn test:all

Voce tambem pode rodar os comandos de inicialização e teste de cada app individualmente, basta digitar:

    yarn [app] [comando]
