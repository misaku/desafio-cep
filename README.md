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

# DESAFIO

### 1 - API

Expor um serviço de BUSCA DE CEP
Eu, como usuário, quero informar meu CEP e obter o nome da minha
RUA, BAIRRO, CIDADE e ESTADO para preencher meus dados de cadastro de forma automática.
Os critérios de aceite dessa história são:
- [x] Dado um CEP válido, deve retornar o endereço correspondente
- [x] Dado um CEP válido, que não exista o endereço, deve substituir um dígito da direita para a esquerda por zero até que o endereço seja localizado (Exemplo: Dado 22333999 tentar com 22333990, 22333900 …)
- [x] Dado um CEP inválido, deve retornar uma mensagem reportando o erro: "CEP inválido"

#### O que se espera para as questões, dicas e direcionamentos:

- [x] Os serviços devem receber e responder JSON;
- [x] Faça o uso de Mocks principalmente nos testes;
- [x] Os dados dos CEPs podem ser "Mocados";
- [X] Pense em como documentar os cenários desenvolvidos (Testes sempre são uma boa forma de documentar);
- [x] Ao finalizar o desenvolvimento você pode compartilhar o código pelo Github ou de outra maneira que preferir (como arquivo compactado). Se possível, em caso de arquivo compactado, envie o mesmo para um virtual drive e compartilha o link na prova;
- [x] Fique a vontade para entrar em contato e tirar dúvidas;
- [x] Juntamente com o Código, deve-se documentar a estratégia utilizada para a criação da aplicação, a arquitetura utilizada e os padrões. A documentação pode ser feita via GIT/Bitbucket ou adicionado no HackerRank. Isto faz parte da avaliação da prova.
- [x] Em caso de uso do Git/Bitbucket não esqueça de criar o .gitignore.

#### Extras:

- [x] preferencialmente use um versionador e faça commits granulares;
- [x] api com autorização;
- [x] boas práticas de design de api;
- [x] swagger com a documentação;
- [x] tecnologias preferenciais: java ou node.js - justifique, no readme a escolha da tecnologia.

#### Extras plus plus master (não é mandatório, apenas diferencial se vc tiver tempo e conhecimento):
- [x] logs estruturados;
- [x] endpoint para saúde da aplicação;
- [x] endpoint para métricas da aplicação;
- [x] considere a performance do algoritmo e o tempo de resposta da aplicação, sabendo que a API  pode receber flutuações de tráfego agressivas.


### 2 - Questão

Quando você digita a URL de um site (http://www.netshoes.com.br) no browser e pressiona enter, explique da forma que preferir, o que ocorre nesse processo do protocolo HTTP entre o Client e o Server.
O que espera-se como resposta - Dicas e direcionamentos:
- Detalhe sua linha de raciocínio;
- Elabore um plano de entendimento, por exemplo, lista, de forma a elencar os passos;
- Não copie conteúdo da internet, responda com suas palavras.




