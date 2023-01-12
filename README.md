## Under development || Em desenvolvimento

# Microservice-with-Javascript-and-python
Microservice with python, nodeJs, docker and kafka

Este projeto foi criado para realizar a conexão entre JavaScript e Python

# Ferramentas utilizadas

- ## NodeJs

  Utilizado como servidor de requisições.

- ## Python

  Utilizado na criação do serviço a partir de eventos

- ## Kafka

  Responsavel pela mensageria do projeto

- ## Docker

  Criação de containers da aplicação

- ## Docker-compose

  Responsavel por gerenciar a aplicação, portas, e conexões entre os serviços

# Escopo do Projeto

- Escopo geral

  - Aplicação deverá salvar um arquivo com a mensagem enviada
  - Aplicação deverá listar todos os arquivos e suas mensagens
  - A criação do arquivo deve ser desacoplada no servidor http

- Serviço AppJavaScript

  - Get ' / ' => Listar todos os arquivos
  - Post ' / ' => Cria uma solicitação para o App Python criar um arquivo
  - Deverá imprimir no console a resposta da solicitação

- Serviço AppPython
  - Deverá atender as solicitações de criação de arquivo
  - Criar um arquivo .txt na pasta ./files com a mensagem
  - O nome do arquivo deverá ser o timestamp atual
  - Responder a solicitação
  
  ## Iniciação do projeto
  
  ```
  docker compose up --build -d
  ```
