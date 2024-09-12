# Projeto CRUD de Jogos com LocalStorage e Docker

Este projeto implementa um sistema CRUD (Criar, Ler, Atualizar, Excluir) para jogos usando LocalStorage para armazenar os dados. A aplicação web é construída com HTML e JavaScript e é servida usando Nginx. Todo o sistema é executado via Docker, facilitando a instalação e execução.

## Estrutura do Projeto

- `index.html`: Interface web para criar, atualizar, excluir e visualizar jogos.
- `script.js`: Lógica JavaScript para manipulação do LocalStorage, edição e exclusão de jogos, e envio da lista para WhatsApp.
- `Dockerfile`: Configuração para criar a imagem Docker com Nginx.
- `docker-compose.yml`: Arquivo para configuração e execução do container Docker com Nginx.

## Funcionalidades

O sistema permite que o usuário:
- Crie um novo jogo fornecendo nome, gênero e ano de lançamento.
- Atualize os dados de um jogo existente.
- Exclua um jogo.
- Liste todos os jogos cadastrados.
- Envie a lista de jogos para um número de WhatsApp inserido.

## Como Executar o Projeto

### Pré-requisitos

Certifique-se de que o Docker e o Docker Compose estejam instalados na sua máquina.

### Passo a Passo

1. **Clonar o repositório:**

   Se o código estiver hospedado em um repositório Git, você pode clonar usando:
   ```bash
   git clone https://github.com/wilsongsf/games-ls-docker.git
   cd games-ls-docker

2. **Construir e executar o contêiner:**
    Se você estiver usando Docker Compose, execute:
    bash
    docker-compose up -d

    Se você estiver usando apenas Docker, execute os seguintes comandos:
    bash
    docker build -t games-ls-docker .

    Executar o contêiner:
    bash
    docker run -d -p 8080:80 --name games-ls-docker games-ls-docker

    Esses comandos:
    Mapeiam a porta 80 para o servidor Nginx, que serve o index.html.


3. **Acessar a aplicação:**
    Abra um navegador web e vá para http://localhost:8080.


**Observações Importantes**
O LocalStorage é usado para armazenar os dados dos jogos localmente no navegador. Isso significa que os dados não são persistidos entre diferentes dispositivos ou navegadores.
Para garantir que o sistema funcione conforme o esperado, o LocalStorage deve estar habilitado no navegador.

**Conclusão**
Este projeto é uma aplicação simples de CRUD para jogos usando LocalStorage e Docker. Caso enfrente problemas durante a execução ou queira expandir o projeto, não hesite em modificar o código ou abrir uma issue no repositório para obter suporte.