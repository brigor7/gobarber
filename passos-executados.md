# Criação de tabela Users

1. No terminal execute: `yarn typeorm migration:create -n CreateUsers`. Será criado uma classe na pasta `cli->MigrationsDir` definido em ormconfig.json.

2. Realizar a implementação dos metodos up e down na class CreateUsers.

3. Criar tabela no banco execute: `yarn typeorm migration: run`

4. Para voltar a ultima inplementação realizada execute: `yarn typeorm migration: revert`

5) Way of Creation: Migration -> Model -> Route -> Service.
