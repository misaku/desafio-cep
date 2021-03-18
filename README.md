# BUSCA CEP
Esse projeto é um desafio nagual deve se expor uma api por busca de cep.
## DESAFIO
[Ver o texto](DOC/DESAFIO.md)

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
## Rotas

| TYPE | PATH | ARGS | QUERY | PARAMS | DESCRIÇÃO |
|------|------|------|-------|--------|-----------|
|GET| / | - | - | - | Retorna status do servidor |
|GET| /auth/token | - | - | - | retorna token da aplicação |
|GET| /games | - | - | - | lista todos objetos |
|GET| /games?players= | - | players: `joão,josé` | - | Filtra por players |
|GET| /games/:key | KeyGame | - | - | Seleciona jogo especifico |
| - | /doc | - | - | - | Documentação swagger da aplicação |

## Como testar
### Via swagger
1. Entrar na tora `/doc`
2. Acessar todos os metodos, somente o de Auth e o de Health Funcionará sem autenticação
3. Pegar token e adicionar no campo authorize que está no canto superior direito
4. testar rotas de game
### Via Cliente
Repetir os passos de 2 e 4 no cliente escolgido, no caso passo 3 colocar autenticação no cliente escolhido
## Estrutura do projeto
A estrutura do projeto foi pensada para trabalhar com modularização de componentes.

Cada módulo tem sua responsabilidade sua rota e sua regra de negócio. Os arquivos de configuração de padronização do projeto ficam fora da pasta `src` e o core da aplicação ficam na pasta `App`






# COMMITS PADRONIZADOS

### PADRÃO:
```
<TIPO>(SCOPO):<ASSUNTO>
```
### TIPOS:

**NOME** | **DESCRICAO** |
------|-----------
**feat** | *Um novo recurso*
**fix** | *Uma correção de bug*
**docs** | *Alterações apenas na documentação*
**style** | *Mudanças que não afetam o significado do código (espaço em branco, formatação, ponto e vírgula ausente, etc)*
**refactor** | *Uma alteração de código que não corrige um bug nem adiciona um recurso*
**test** | *Adicionar testes ausentes ou corrigir os existentes*
**chore** | *Mudanças no processo de construção ou ferramentas e bibliotecas auxiliares, como geração de documentação*
**perf** | *Uma alteração de código que melhora o desempenho*
**ci** | *Mudanças em seus scripts e arquivos de configuração de CI*
**build** | *Mudanças que afetam o sistema de compilação ou dependências externas (escopos de exemplo: gulp, broccoli, npm)*
**revert** | *commit usado quando volta para um commit anterior*

### ESCOPO:
Opcional, pode ser qualquer coisa especificando o escopo da mudança de confirmação.\
Por exemplo $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc.\
No desenvolvimento de aplicativos, o escopo pode ser uma página, um módulo ou um componente.

### ASSUNTO:
Breve resumo da mudança no tempo presente. Sem letras maiúsculas. Sem ponto final no final

### EXEMPLO:
```BASH
git commit -m "chore(separation): add list"
```


# RESPODER QUESATO 2
cliente faz a requisição via http
- um serviço de dns vai garantir que seja enviada a requisição para o servidor certo
- essa requisição é feita entre um conexao TCP/IP
- ao bater no servidor ele fornecer html inicial da pagina seja através de um cache, arquivou ou criado via server
- ao retornar ao cliente o navegador vai processar os javascript e css e se necessário faz requisições buscando eles
- no cliente o front-end vai fazer as requisições rest para o beck-end
- no server beckend ele vai processar as requisiçoes,  buscar no banco ou cache e devolver uma resposta com os dados necessario para completar a pagina
- ao receber os dados o no client o front end vai estrturar o html e css com os dados recebido e o cliente navegador vai garantir que as informações seja apresentada da maneira esperada


- Há duas maneiras de interpretar um CEP inválido, uma é não segue padrão de formatação de CEP, outra é não foi encontrado dados para o CEP informado, eu considerei com  inválido quaisquer dado diferente das seguintes formatações `00.000.000`, `00.000-000`, `00.000 000`, `00000.000`, `00000-000`, `00000 000`, `00000000`, ja a segunda opção não considerei como inválido sómente não encontrado.
- OBS: Consegui visualizar dois algoritimos para solução, um é um algoritimo recursivo e outro através de um loop, particularmente eu prefiro o recursivo pois acho que fica um pouco mais claro, mas acredito que através do loop a aplicação consome menos memoria, como o objetivo deste desafio é mostrar meu conhecimento resolvi fazer as duas resoluções
- Foi adotado `node.js`, é uma tecnologia que tenho mais familiaridade e também é a stack forte da squad.





