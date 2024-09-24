![Código Certo Coders](https://utfs.io/f/3b2340e8-5523-4aca-a549-0688fd07450e-j4edu.jfif)

# 📚 Objetivo da aplicação
Este projeto tem como objetivo desenvolver uma aplicação web completa para gerenciamento de projetos, juntamente com um servidor back-end, afim de testar os conhecimentos para integrar a equipe de voluntário da Código Certo. A aplicação web permitirá aos usuários listar, cadastrar, editar e excluir projetos, cada um contendo um título e uma descrição.

## Gestão de Projetos
Permite criar, consultar, atualizar e excluir projetos (CRUD).
- Endpoints:
  - POST: `trilhafullstack.onrender.com/projects`
  - GET: `trilhafullstack.onrender.com/projects`
  - PUT: `trilhafullstack.onrender.com/projects/id`
  - DELETE: `trilhafullstack.onrender.com/projects/id`
- OBS: Ao utilizar algum endpoints pode haver delay no retorno da requisição (~ um minuto), pois o servidor backend fica inativo após 15 minutos sem utilização.

## Gestão de Usuários
Permite criar, consultar e autorizar (retorna um token JWT) usuários.
  - Endpoints:
    - POST: `trilhafullstack.onrender.com/user`
    - GET: `trilhafullstack.onrender.com/user`
    - POST: `trilhafullstack.onrender.com/login`
  - OBS: Ao utilizar algum endpoints pode haver delay no retorno da requisição (~ um minuto), pois o servidor backend fica inativo após 15 minutos sem utilização.

## Linguagens e Ferramentas Utilizadas

- **Node.js**: Para o desenvolvimento do Backend com Express.
- **Jsonwebtoken (JWT)**: Para autorização de acesso.
- **Bcrypt**: Para criptografar a senha dos usuários antes de salvar no banco de dados.
- **MongoDB/Mangoose**: Banco de dados e ORM.
- **React**: Para o desenvolvimento do Frontend.
- **Next.js**: Ferramenta de build para desenvolvimento Frontend.
- **TailwindCSS**: Para estilização e estruturação do Frontend.
- **Vercel**: Para o deploy do Frontend.
- **Render**: Para o deploy do Backend.

# Requisitos para o desenvolvimento do projeto (Código Certo)

## FrontEnd:
- **HTML/CSS/JavaScript puro:** Utilize HTML para estruturar a página, CSS para estilização e JavaScript puro (ou jQuery, se preferir) para manipulação de DOM e interações com o servidor.
- Implemente uma página para listar os projetos cadastrados.
- Desenvolva formulários para adicionar e editar projetos.
- Inclua botões para editar e deletar projetos, com confirmação antes de executar a ação.

## BackEnd:
- **Node.js (Express), Python (Flask/Django), Java (Spring Boot), etc.:** Escolha uma linguagem e framework de sua preferência para criar um servidor que irá fornecer APIs RESTful para operações CRUD.
- Configure rotas para manipular os projetos, utilizando métodos HTTP adequados (GET, POST, PUT, DELETE).
- Utilize um banco de dados (SQL ou NoSQL) para armazenar os projetos.

#### Tecnologias Recomendadas:
- **Front-end:** HTML, CSS, JavaScript, React.js
- **Back-end:** Node.js, Express.js
- **Banco de Dados:** SQLite (com Sequelize ou outro ORM)
- **Autenticação:** JWT (JSON Web Tokens)
- **Deploy:** Heroku, Vercel, ou outro serviço de hospedagem gratuito

Primordial: Utilizar as cores da paleta da **Codigo Certo Coders:**
![Codigo Certo Coders Cores](https://github.com/codigocerto/TrilhaFrontEndJR-JUN15/assets/170693068/5ced1a97-b2c6-4f54-836c-7b3e115f879f)
- **#000000** (preto)
- **#e53939** (vermelho)
- **#ffffff** (branco)

### Detalhes Técnicos: 🔧
- **Boas Práticas:** Utilizar boas práticas de código limpo, legível e bem documentado.
- **Git:** Utilizar Git para controle de versão e submeter o projeto através de um repositório público no GitHub.

### Apreciações: 🎉
- **Permitir edição dos conteúdos.**
- **Utilização máxima possível de HTML semântico.**
- **Segurança Reforçada.**
- **Documentação Excepcional.**
- **Escalabilidade**

### Dicas para Abordar o Projeto 🌟
- **Crie um Fork desse Repositório.**
- **Criar do Zero:** É fundamental que o projeto seja desenvolvido completamente do zero, demonstrando suas habilidades e criatividade desde o início.
- **Atenção aos Detalhes Visuais:** Utilize a paleta de cores e elementos visuais de forma coesa para uma experiência impactante.
- **Versionamento com Git:** Faça uso eficiente do Git para controlar suas alterações e manter um histórico claro do desenvolvimento.

### Critérios de Avaliação: 📝
- **Documentação:** Documentação adequada do projeto, incluindo descrição do funcionamento, instruções de instalação e configuração (se aplicável).
- **Funcionalidade:** A aplicação deve atender à estrutura da página e aos requisitos definidos.
- **Qualidade do Código:** O código deve ser limpo, bem estruturado e adequadamente documentado.
- **UI/UX:** A interface do usuário deve ser intuitiva e visualmente atraente.
- **Uso do Git:** Utilização eficaz do controle de versão com mensagens de commit significativas.
- **Hospedagem e Deploy** A aplicação front-end e o servidor back-end estão hospedados de forma acessível ao público.

### Não Queremos 🚫
- Descobrir que o candidato não foi quem realizou o teste.
- Ver commits grandes sem muita explicação nas mensagens no repositório.
- Entregas padrão ou cópias de outros projetos. Buscamos originalidade e autenticidade em cada contribuição.

### Prazo ⏳
A data máxima para entrega das trilhas foi removida, permitindo que as pessoas entreguem conforme sua disponibilidade. No entanto, ainda é necessário concluir a trilha com sucesso para ser inserido em uma equipe.

### Instruções de Entrega: 📬
Após finalizar o projeto, publique-o em uma URL pública (por exemplo, Vercel, Netlify, GitHub Pages, etc.) e hospede o seu servidor na nuvem. Use serviços que ofereçam uso gratiuto por um período, como a AWS e preencha o [Formulário](https://forms.gle/gZViPMTSDV5nidSu6):  

---

### Desafio da Inovação 🚀
Achou esse projeto inicial simples? Eleve ainda mais! Estamos em busca de mentes inovadoras que não apenas criem, mas que também desafiem os padrões. Como você pode transformar essa estrutura inicial em algo verdadeiramente extraordinário? Demonstre o poder da sua criatividade e o impacto das suas ideias inovadoras!

---

🔗 **Mantenha-se Conectado:**
- [Discord](https://discord.gg/wzA9FGZHNv)
- [Website](http://www.codigocertocoders.com.br/)
- [LinkedIn](https://www.linkedin.com/company/codigocerto/)
  
🌐 **Contato:**
- Email: codigocertocoders@gmail.com

---

### Precisa de Ajuda?
Está com alguma dificuldade, encontrou algum problema no desafio ou tem alguma sugestão pra gente? Crie uma issue e descreva o que achar necessário.

**Construindo o amanhã, hoje.**
