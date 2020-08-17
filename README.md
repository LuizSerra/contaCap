

## :rocket: Sobre o desafio

O desafio consiste em criar uma aplicação composta por uma API Rest com Java Spring Boot que deveria ser consumida por um frontend Angular 5+;
 A API Rest para expor os seguintes serviços para seus clientes: 
 1) Serviço para verificar o saldo de uma conta corrente; 
 2) Serviço para realizar um depósito em uma determinada conta corrente; 
 3) Serviço para realizar um saque de uma determinada conta corrente. 
 
### REQUISITOS 

1) A API Rest deve ser desenvolvida utilizando Java com Spring Boot. (o projeto pode ser criado utilizando o STS ou utilizando o Eclipse com plugin do STS ou utilizando o site https://start.spring.io/); 
2) O frontend deve ser desenvolvido utilizando Angular 5; 
3) Caso julgue necessário persistir algum dado, o candidato fica livre para propor a utilização de algum banco de dados. Por ter uma melhor portabilidade, sugerimos a utilização do banco em memória H2, mas não é obrigatório; 
4) Caso utilize algum banco de dados, deve ser utilizado o framework JPA juntamente com o Spring Data;


## :hammer: Tecnologias Utilizadas:

### Backend:
	-Java 1.8
	-Spring Boot
	-Spring-data
	-FlywayDB (Migrations)
	-MySQL
	-Hibernate

### Frontend:
	-NodeJS (npm)
	-Angular 5+ (com angulat CLI)
	-Bootstrap 4

## :key: Como rodar esse projeto.

### :sheep: Clonando o repositório.
```
# Clone este repositório
$ git clone https://github.com/LuizSerra/contaCap.git

```
### Backend:
Há duas formas de executar o projeto:
1) Executar o arquivo contaCap.jar que se encontra na pasta raiz do projeto. Para isso execute o seguinte comando no terminal: `java -jar contaCap.jar`
- Lembre-se de checar os requisitos de configuração presentes no arquivo **application.properties**, inclusive no  que diz respeito ao Banco de dados(essa aplicação utiliza MySQL.:
	````
	server.port = 9000
	spring.jpa.database=MYSQL
	spring.datasource.url=jdbc:mysql://localhost/contacap?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC
	spring.datasource.username=root
	spring.datasource.password=
	spring.jpa.show-sql=true
	spring.jackson.deserialization.fail-on-unknown-properties=true
	spring.jackson.serialization.fail-on-empty-beans=false
	````
2) Importe o projeto com o STS (Spring Tools Suite) ou utilizando o Eclipse com plugin do STS ou utilizando o site https://start.spring.io/; 
	-	Atualize com as dependências necessárias utilizando o maven.

### Frontend:
- Navegue até a pasta do projeto e  execute, via terminal o comando `npm install`
- Aguarde que o npm instale as dependências necessárias. Em seguida execute o comando `ng serve`
- Pronto! A aplicação estará rodando na porta 4200;

## :twisted_rightwards_arrows: Rotas da aplicação.
CONTAS
- **`Listar contas` (GET: localhost:9000/contas)**: 
- **`Criar conta` (POST: localhost:9000/contas)**: 
	- O objeto a ser enviado deve conter o nome do titular e opcionalmente um valor inicial para o saldo. 
		- Ex: `{"titular": "Fernando Fialho", saldo: 500 } `
}
- **`Buscar conta por código` (GET: localhost:9000/contas/:id)**: 

TRANSAÇÕES

- **`Listar transações` (GET: localhost:9000/transacoes)**: 
- **`Criar transacao` (POST: localhost:9000/transacoes)**: 
	- O objeto a ser enviado deve conter o nome do titular e opcionalmente um valor inicial para o saldo. 
		- Ex: `{"valor": 5000,"tipo": "CREDITO","conta": {"codigo": 1	}}` 
			- OBS: o tipo de transação aceita os valores DEBITO ou CREDITO para simbolizar uma operação de Saque ou depósito respectivamente.
- **`Listar transações por conta` (GET: localhost:9000/transacoes/conta/:id)**:  Essa rota lista as transações de uma determinada conta.
- 
### Funcionamento da aplicação.
 A forma de usar a aplicação é bastante simples.
 - Primeiro certifique-se de que a API está em execução. 
	 - A api já está com o cors configurado para receber requisições da origem http://localhost:4200.
 - Após subir a aplicação frontend, será exibida uma página com os seguintes controles: 
	 - **Botão Criar Conta**: Esse botão abre um modal onde é possível criar uma nova conta definindo o nome do titular e um valor inicial para o saldo (opcional);
	 - **Botão Ver Contas Existentes**: Esse botão abre um modal com uma tabela listando as contas cadastradas. É importante frisar que o backend possui uma migration que além de criar a tabela conta, também faz 3 inserts. É perfeitamente possível adicionar novas contas.
	 - **Dropdown Contas**: Consiste numa caixa de seleção que lista as contas existentes, permitindo selecionar uma delas para que seja alvo de uma operação[saque, depósito ou extrato]
	 - **Dropdown Operação**: Uma caixa de seleção com as operações possíveis. São elas: Depositar, Sacar ou Extrato. As duas primeiras habilitam o controle Valor, explicado abaixo. A última, por sua vez, exibe o **saldo** da conta, bem como uma tabela com as operações de saque e depósito realizados sobre aquela conta.
	 - **Input Valor**: Um campo de entrada do tipo numérico apenas visível caso a caixa de seleção anterior não esteja com o valor EXTRATO selecionado. Esse campo serve para o usuário digitar o valor que ele deseja adicionar ou retirar da conta que está selecionada.
	 - **Botão Enviar**:  Serve para disparar a ação selecionada no dropdown Operação. Esse botão só estará habilitado, caso o formulário tenha todos os campos obrigatórios preenchios.
	 - **Botão limpar**: Limpa o formulário.

![enter image description here](https://github.com/LuizSerra/contaCap/blob/master/contaCap-ui/src/assets/screenshot1.PNG)
## :computer: Quer contribuir com o Projeto? Saiba como:

-   Faça um  **fork**  do projeto;
-   Crie uma nova branch com as suas alterações:  `git checkout -b my-feature`
-   Salve as alterações e crie uma mensagem de commit contando o que você fez:`git commit -m "feature: My new feature"`
-   Envie as suas alterações:  `git push origin my-feature`

> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

Feito com dedicação por Luiz Serra 👋🏽 [Entre em contato](https://www.linkedin.com/in/luizserra)!

