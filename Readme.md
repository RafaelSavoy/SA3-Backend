Após clonar o projeto em sua máquina, instale as dependencias do projeto:

npm install

##Renomeie o arquivo .env.example para .env e o complete com as seguintes informações:

DB_HOST=<host do banco de dados>
DB_USER=<usuário do banco de dados>
DB_PASSWORD=<senha do banco de dados>
DB_NAME=<nome do banco de dados>
DB_PORT=<porta do banco de dados>
PORT=<porta do servidor>
PRIVATE=<chave privada para autenticação JWT (Bate a mão no teclado) >

##Crie o banco de dados:

npx sequelize-cli db:create

##Rode as migrations para criar as tabelas do banco de dados (usuário admin já incluido):

npx sequelize-cli db:migrate

##Inicie o servidor:

npm run start:dev
