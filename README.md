<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Projeto realizado com NodeJs e Prisma
## Banco de Dados utilizado: Mysql

>API criada para estudar conceitos de backend, utilizando a linguagem de programação Typescript, ORM Prisma e banco de dados Mysql. Nessa API foi criado um CRUD completo e relacionamento entre Filmes, Gêneros e Participantes.

# Executando o projeto

É necessário criar o arquivo .env com a url do seu banco, _utilize o arquivo .env.example_ para criar o seu. Esse é um exemplo de string de conexão com o banco de dados: 
DATABASE_URL="mysql://"usuario":"senha"@localhost:"porta"/"nome_do_banco" - sem as aspas.

Em seguida pode-se executar o projeto:
```bash
npm run start:dev
```
# Testando a API para

Você pode utilizar as ferramentas:

- Postman
- Insomnia
- Thunder Client (plugin VSCode)

## Exemplos de URLs:

>URL FILMES
* Essa é a URL de teste padrão: http://localhost:3000/filmes

* Para buscar por ID, insira o ID na URL: http://localhost:3000/filmes/5

* Para Editar por ID, insira o ID na URL:  http://localhost:3000/filmes/update/5

* Para Apagar por ID, insira o ID na URL:  http://localhost:3000/filmes/delete/5

Essa é a estrutura JSON para fazer o POST e o PUT:
```json
{
	"nome": "Top Gun",
	"imagem": "teste-imagem",
	"data_lancamento": "1986",
	"tempo_duracao": "140"
}
```

>URL PARTICIPANTES
* Essa é a URL de teste padrão: http://localhost:3000/participantes

* Para buscar por ID, insira o ID na URL: http://localhost:3000/participantes/5

* Para Editar por ID, insira o ID na URL:  http://localhost:3000/participantes/update/5

* Para Apagar por ID, insira o ID na URL:  http://localhost:3000/filmes/delete/5

Essa é a estrutura JSON para fazer o POST:
```json
{
	"nome": "Tom Cruise",
	"imagem": "teste",
	"data_nascimento": "10/10/1956",
	"ator_staff": "ator",
	"filme":1
}
```
>_Observe que deve ser colocado o ID do filme a ser relacionado com o participante._

Essa é a estrutura JSON para fazer o PATCH:
```json
{
	"nome": "Thomas Cruise Mapother IV"
}
```
>_Coloque somente o campo ou campos a serem alterados._

>URL GÊNERO
* Essa é a URL de teste padrão: http://localhost:3000/generos

* Para buscar por ID, insira o ID na URL: http://localhost:3000/generos/5

* Para Editar por ID, insira o ID na URL:  http://localhost:3000/generos/update/5

* Para Apagar por ID, insira o ID na URL:  http://localhost:3000/filmes/generos/5

Essa é a estrutura JSON para fazer o POST:
```json
{
	"nome": "ação",
	"filme": 1
}
```
>_Observe que deve ser colocado o ID do filme a ser relacionado com o gênero._