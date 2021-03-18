#PROJETO

Antes de falar sobre o projeto gostaria de destacar que:
 - há duas maneiras de interpretar um CEP inválido, uma é não segue padrão de formatação de CEP, outra é não foi encontrado dados para o CEP informado, eu considerei com  inválido quaisquer dado diferente das seguintes formatações `00.000.000`, `00.000-000`, `00.000 000`, `00000.000`, `00000-000`, `00000 000`, `00000000`, ja a segunda opção não considerei como inválido sómente não encontrado.
 - Consegui visualizar dois algoritimos para solução, um é um algoritimo recursivo e outro através de um loop, particularmente eu prefiro o recursivo pois acho que fica um pouco mais claro, mas acredito que através do loop a aplicação consome menos memoria, como o objetivo deste desafio é mostrar meu conhecimento resolvi fazer as duas resoluções
 - Foi adotado `node.js`, é uma tecnologia que tenho mais familiaridade e também é a stack forte da squad.

## ESTRUTURA DO PROJETO

O projeto foi desenvolvido tentando seguir o padrão de solid, ele é modularizado com cada modulo contendo suas rotas e regas de negocio.

## SOLUÇÕES UTILIZADAS

dentre diversa soluções utilizadas gostaria de destacar algumas e o porque do da utilização

- foi utilizado injeção de dependencia com a biblioteca [tsyringe](https://github.com/Microsoft/tsyringe#readme) assim  não precisa ficar intanciando todas dependencia no codigo deixando para biblioteca fazer automático e tb controlando as instancia no meu caso usei o singleton garantindo que seja instanciado somente uma vez e retorando instancia ativa.
- typescript path maper, um recurso do typescript de mapear as pastas do projeto evitando ter que fazer `../../../`
- uso de interfaces para representar classes com isso não fico preso a uma classe e sim a estrutura que deve seguir, pode se ver o ganho do uso delas nos meus testes noqual eu moco o banco com uma classe de repositorio fake.
- uso de variaveis ambientes para configurações como log, banco, token e etc.
- JSDOC alem de documentar o codigo da pra gerar documentação automática
- commits padronizado, adotando os commits padronizados além de ser uma boa prática pode se fazer uso de libs para gerar release automático, nesse caso nosso projeto adota uma lib de release também
  - mais abaixo tem umas informações de commits padronizado

# QUESTÃO 2

- cliente faz a requisição via http
- um serviço de dns vai garantir que seja enviada a requisição para o servidor certo
- essa requisição é feita entre uma conexão TCP/IP
- ao bater no servidor ele fornece html inicial da pagina seja através de um cache, arquivou ou criado via server
- ao retornar ao cliente o navegador vai processar os javascript e css e se necessário faz requisições buscando eles
- no cliente o front-end vai fazer as requisições rest para o beck-end
- no server beckend ele vai processar as requisições, buscar no banco ou cache e devolver uma resposta com os dados necessários para completar a pagina
- ao receber os dados o no client o front end vai estruturar o html e css com os dados recebido e o cliente navegador vai garantir que as informações seja apresentada da maneira esperada

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
