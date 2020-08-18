#GOBARBER

## Backend

Para baixar as dependencias da pasta node_modules:
`yarn install`

Para executar o backend execute:
`yarn dev:server`

## Endpoints

[get](http:\\localhost:3333\appointments) e 
[post](http:\\localhost:3333\appointments).
Para o metodo post, passe no corpo um json com os dados de *provider* e *date*.

## Migrations
Em caso de alteração da migrations execute:

`yarn typeorm migration:revert` Para desfazer as alterações implantadas

`yarn typeorm migration:run` Para subir as novas alterações implantadas
