# DevFreelancer - Site de Serviços de Programação

Este projeto é um site de página única (SPA) para um freelancer de desenvolvimento de software, construído com Angular. O site apresenta serviços oferecidos, projetos recentes e um formulário de contato funcional usando EmailJS.

## 🚀 Tecnologias Utilizadas

- **Angular 18** - Framework principal
- **TypeScript** - Linguagem de programação
- **SCSS** - Pré-processador CSS para estilização
- **Font Awesome** - Biblioteca de ícones
- **EmailJS** - Serviço para envio de emails via formulário
- **RxJS** - Programação reativa
- **Dotenv** - Gerenciamento de variáveis de ambiente

## 📁 Estrutura do Projeto

O projeto segue a estrutura padrão de um aplicativo Angular, com componentes organizados de forma modular:

- **Header**: Navegação principal do site
- **Banner**: Seção de destaque principal com apresentação
- **Services**: Exibição dos serviços oferecidos
- **Projects**: Galeria de projetos recentes (anteriormente Carousel)
- **Contact**: Formulário de contato com integração EmailJS
- **Footer**: Rodapé com links e informações adicionais

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- NPM (geralmente vem com o Node.js)

### Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd freelancer
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### 📧 Configuração do EmailJS

O projeto utiliza EmailJS para o envio de emails através do formulário de contato. Para configurar:

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. Crie um serviço de email e um template
3. Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:
   ```env
   # EmailJS Configuration
   EMAILJS_PUBLIC_KEY=sua_chave_publica
   EMAILJS_SERVICE_ID=seu_service_id
   EMAILJS_TEMPLATE_ID=seu_template_id
   EMAILJS_TO_EMAIL=seu_email_de_destino
   ```

4. O arquivo de configuração será gerado automaticamente ao executar o projeto

## 🏃‍♂️ Executando o Projeto

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm start
```

Este comando irá:
1. Gerar o arquivo de configuração com base nas variáveis de ambiente
2. Iniciar o servidor Angular em modo de desenvolvimento

O aplicativo estará disponível em `http://localhost:4200/`.

### Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Constrói o projeto para produção
- `npm run watch` - Constrói o projeto em modo watch
- `npm run setup-env` - Gera apenas o arquivo de configuração
- `npm run generate-config` - Alias para setup-env

## 🏗️ Construção para Produção

Para construir o projeto para produção:

```bash
npm run build
```

Os arquivos de build serão armazenados no diretório `dist/`.

## 🎨 Personalização

### Estilos
- As cores principais podem ser ajustadas no arquivo `src/styles.scss` nas variáveis CSS
- Cada componente possui seu próprio arquivo SCSS para estilos específicos

### Conteúdo
- As imagens podem ser substituídas no diretório `src/assets/images/`
- Os textos e conteúdos podem ser editados nos respectivos componentes
- A configuração do site é gerenciada através do arquivo `app-config.json` gerado automaticamente

### Componentes
- Cada seção do site é um componente Angular independente
- Os componentes estão localizados em `src/app/components/`
- Serviços auxiliares estão em `src/app/services/`

## 🔒 Segurança

- As credenciais sensíveis são gerenciadas através de variáveis de ambiente
- O arquivo `.env` está incluído no `.gitignore` para evitar exposição de credenciais
- Use o arquivo `.env.example` como referência para configuração

## 📝 Funcionalidades

- ✅ Design responsivo
- ✅ Formulário de contato funcional
- ✅ Galeria de projetos
- ✅ Seção de serviços
- ✅ Navegação suave
- ✅ Integração com EmailJS
- ✅ Configuração segura de credenciais

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request