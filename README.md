# BUSCA CEP
Esse projeto é um desafio nagual deve se expor uma api por busca de cep.
## DESAFIO
[Ver o texto](DOC/DESAFIO.md)
[Ver resolução](DOC/RESOLUCAO.md)

## PRIMEIROS PASSOS

### DEPENDENCIAS

#### INSTALAÇÕES
- [Instalação NODE JS](https://nodejs.org/en/)
- [Instalação YARN](https://yarnpkg.com/getting-started/install)
- [Instalação DOCKER](https://docs.docker.com/engine/install/)
- [Instalação DOCKER COMPOSE](https://docs.docker.com/compose/install/)

projeto feito com padões ES9
- node >= `14.16.0`

*apesar de ser sugerida a versão 14 que é a versão naqual foi criada, o projeto foi testado nas seguintes versões 10.x,11.x,12.x,13.x,14.x,15.x
[pode confirmar acessando a actions do projeto](https://github.com/misaku/desafio-cep/actions/workflows/node.js.yml)

### MÃO NA MASSA
* instala as dependendias do projeto rodando o comando:
  ```BASH
  yarn install
  ```
* com as dependencias instaladas, o comando utilizado para subir o banco é:
  ```BASH
  docker-compose up -d
  ```
* após subir o docker, rode o comando:
  ```BASH
  yarn dev:server
  ```
### RODANDO TESTES
```BASH
  yarn test
```
### GERANDO DOCUMENTAÇÃO
```BASH
  yarn docs
```

#### SOLUÇÕES PARA ERROS DE COMPILAÇÕES

- erro de permissão de pasta e arquivo
    - atribue as permissões de leitura e gravação a pastas raiz e suas subpastas

*listando esse erro pois ja tive em outro projetos quando abria em outras maquinas, então acho que pode ser algo que possa acontecer.

## ROTAS

| TYPE | PATH | PAYLOAD | AUTH | DESCRIÇÃO |
|------|------|------|--------|-----------|
|POST| /auth | `{email:'',password:''}` | - | Endpoint de Autenticação, retorna token JWT |
|GET| /cep/:cepVaue | - | JWT | Endpoint de busca de endereço com algoritimo de loop |
|GET| /cep2/:cepVaue | - | JWT | Endpoint de busca de endereço com algoritimo de recursão |
|GET| /doc | - | - | Documentação swagger da aplicação  |
|GET| /health | - | - | Endpoint de verificação healthcheck |
|GET| /status | - | - | Endpoint de metricas em realtime da aplicação |
|GET| /swagger.json  | - | - | json do swagger pode ser usado para configurar o postman ou o insomnia |
|POST| /user  | - | - | Endpoint de Criação de Usuário |

## COMO TESTAR
### VIA SWAGGER
1. Entrar na rota `/doc`
2. Acessar todos os metodos, somente /auth, /health e /user Funcionará sem autenticação
3. Criar usuário
4. Logar com usuário e pegar token e adicionar no campo authorize que está no canto superior direito
5. testar rotas

### VIA CLIENTE
Pode importar as rotas no seu cliente através da url do json do swagger
Repetir os passos de 2 ao 5 no cliente escolhido




