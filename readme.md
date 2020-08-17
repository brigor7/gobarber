#GOBARBER

_Backend_
Para baixar as dependencias da pasta node_modules:
`yarn install`

Para executar o backend execute:
`yarn dev:server`

_Endpoints_
`get: http:\\localhost:3333\appointments`
`post: http:\\localhost:3333\appointments`
Para o metodo post, passe no corpo um json com os dados de [provider] e [date].

_Migrations_
Em caso de alteração da migrations execute:
`yarn typeorm migration:revert` Para desfazer as alterações implantadas

`yarn typeorm migration:run` Para subir as novas alterações implantadas
