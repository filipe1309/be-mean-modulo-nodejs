# Node.js - Aula 08 - Exercício
**user:** [filipe1309](https://github.com/filipe1309)  
**autor:** Filipe Leuch Bonfim


## Aula 8 - 2/6 - [Mongoose - Plugins](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.gfc411b2d6_0_6)

1 - Crie um novo schema como nome de User, e use o plugin timestemp nele, esse schema deve ter email e password .

2 - Crie um novo plugin que adicione o um novo campo ao schema User, o novo campo de ser O Sexo do tipo String.

3 - Salve 5 novos Users com email, password e Sexo, vindo dos plugins.


## Aula 8 - 4/6 - [Mongoose - Middlewares](https://www.youtube.com/watch?v=xR3ex_YjQyc)

 1 - Criar um middleware *pre* com um erro e propagar o erro para quem o chamar, salvar o result e botar no md deste exercício.

 2 - Adicione o módulo de log, aos dois schemas do blog, e faça com que gere um arquivo blog-modules.md com pelo menos 6 operações no blog *save()* ou *delete()*.

 3 - Crie um middleware usando o exmplo do blog, para gerar log com nome e título dos posts que foram buscaods. (dica: use o *find*).


## Aula 8 - 5/6 - [Mongoose](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.gee412a61c_2_0)

1. Insira 5 pokemons novos, na coleção *pokemons*, escolha 3 e os adicione em um array e uma nova coleção chamada *meus-pokemons*, utilizando o *ObjectId*. Adicione o *required* em campos que ache obrigatório no Schema do *Pokemon*.

2. Crie um Schema de exemplo com validação para os campos (utilizar Arquitetura Atômica, ou seja cada campo sendo um Schema separado):
 - email
 - cpf
 - cnpj
 - url
 - ip

3. Dê 3 exemplos *diferentes*, de cada, utilizando as funções:
 - findAndModify
 - findOneAndUpdate
 - findOneAndRemove

4. Crie *1* Schema com todo CRUD funcional e métodos especiais, que agrupe:
 - virtuals
 - getters & setters
 - method & static
 - embedded document
 - plugins
 - middlewares

5. Crie 1 Schema para password com criptografia e arquitetura atômica.
 - use *SHA256 com SALT* como criptografia;
 - use *middleware* com *pre save*;
 - use *methods*.
