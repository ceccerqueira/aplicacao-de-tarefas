**📝 Minha Lista de Tarefas (React)**


Este é um projeto simples para criar, ver, editar e excluir tarefas. Ele salva tudo o que você escreve no seu próprio navegador, então as informações não somem quando você fecha a página.

**✨ O que o App faz?**


Ver tarefas: Mostra todas as suas tarefas na tela inicial.

Criar nova: Você pode adicionar um título e uma descrição para um novo afazer.

Editar: Se escreveu algo errado ou quer mudar a descrição, dá para editar.

Excluir: Um botão simples para apagar a tarefa da lista.

Salvar automático: Usa o "LocalStorage" do seu navegador para guardar os dados.

**📁 Como o projeto está organizado?**


src/context/: Aqui fica o "cérebro" que guarda a lista e as regras de como adicionar ou apagar tarefas.

src/pages/: São as telas que você vê (Início, Criar e Editar).

src/App.js: É quem manda o navegador mostrar a tela certa para cada link.

src/App.css: Onde fica toda a parte visual (cores, tamanhos e botões).

**🛠️ Como rodar no seu computador**


Baixe as pastas do projeto para o seu computador.

Abra o Terminal (ou CMD) dentro da pasta do projeto.

Instale as ferramentas necessárias com o comando:

Bash
npm install
Se o roteador de páginas não estiver instalado, use:

Bash
npm install react-router-dom@5
Ligue o projeto com o comando:

Bash
npm start
O seu navegador vai abrir o site em http://localhost:3000.
