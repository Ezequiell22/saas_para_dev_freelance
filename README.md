# DevFreelancer - Site de Serviços de Programação

Este projeto é um site de página única (SPA) para um freelancer de desenvolvimento de software, construído com Angular. O site apresenta serviços oferecidos, planos de preços, projetos recentes e um formulário de contato funcional usando EmailJS.

## Tecnologias Utilizadas

- Angular 16
- TypeScript
- SCSS para estilização
- Font Awesome para ícones
- EmailJS para o formulário de contato

## Estrutura do Projeto

O projeto segue a estrutura padrão de um aplicativo Angular, com componentes organizados de forma modular:

- **Header**: Navegação principal do site
- **Banner**: Seção de destaque principal
- **Services**: Exibição dos serviços oferecidos
- **Pricing**: Planos e preços disponíveis
- **Carousel**: Carrossel de projetos recentes
- **Contact**: Formulário de contato com integração EmailJS
- **Footer**: Rodapé com links e informações adicionais

## Configuração do Ambiente

### Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (geralmente vem com o Node.js)

### Instalação

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```

### Configuração do EmailJS

O projeto utiliza EmailJS para o envio de emails através do formulário de contato. Para configurar:

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. Crie um serviço de email e um template
3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```
   EMAILJS_PUBLIC_KEY=sua_chave_publica
   EMAILJS_SERVICE_ID=seu_service_id
   EMAILJS_TEMPLATE_ID=seu_template_id
   EMAILJS_TO_EMAIL=seu_email_de_destino
   ```
4. Execute o script de configuração de ambiente:
   ```
   npm run setup-env
   ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```
npm start
```

O aplicativo estará disponível em `http://localhost:4200/`.

## Construção para Produção

Para construir o projeto para produção:

```
npm run build
```

Os arquivos de build serão armazenados no diretório `dist/`.

## Personalização

- As cores principais podem ser ajustadas no arquivo `src/styles.scss` nas variáveis CSS
- As imagens podem ser substituídas no diretório `src/assets/images/`
- Os textos e conteúdos podem ser editados nos respectivos componentes