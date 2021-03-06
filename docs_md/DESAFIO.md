[voltar](../README.md)

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




