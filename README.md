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

## 🐳 Docker & Produção

### Pré-requisitos para Docker
- Docker instalado
- Docker Compose instalado

### Build e Execução com Docker

#### Produção
```bash
# Build da imagem de produção
npm run docker:build

# Executar container de produção
npm run docker:run

# Ou usar Docker Compose (recomendado)
npm run docker:compose:up

# Verificar logs
npm run docker:logs

# Parar e remover containers
npm run docker:compose:down
```

#### Desenvolvimento com Docker
```bash
# Build da imagem de desenvolvimento
npm run docker:build:dev

# Executar container de desenvolvimento (com hot reload)
npm run docker:compose:dev

# Parar container de desenvolvimento
npm run docker:stop:dev
```

### Scripts Docker Disponíveis

| Script | Descrição |
|--------|-----------|
| `docker:build` | Constrói a imagem de produção |
| `docker:build:dev` | Constrói a imagem de desenvolvimento |
| `docker:run` | Executa container de produção na porta 80 |
| `docker:run:dev` | Executa container de desenvolvimento na porta 4200 |
| `docker:compose:up` | Inicia todos os serviços com Docker Compose |
| `docker:compose:down` | Para todos os serviços |
| `docker:compose:dev` | Inicia ambiente de desenvolvimento |
| `docker:stop` | Para e remove container de produção |
| `docker:stop:dev` | Para e remove container de desenvolvimento |
| `docker:logs` | Visualiza logs do container |
| `docker:clean` | Limpa recursos Docker não utilizados |

### Configuração de Produção

1. **Variáveis de Ambiente**: Certifique-se de que o arquivo `.env` está configurado corretamente
2. **Build Otimizado**: O Dockerfile usa multi-stage build para otimizar o tamanho da imagem
3. **Nginx**: Configurado para servir a aplicação Angular com otimizações de cache e compressão
4. **Portas**: 
   - Produção: porta 80
   - Desenvolvimento: porta 4200

### Deploy em Produção

#### Usando Docker Compose (Recomendado)
```bash
# 1. Clone o repositório
git clone <seu-repositorio>
cd freelancer

# 2. Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas credenciais do EmailJS

# 3. Inicie a aplicação (o Docker Compose lerá automaticamente o .env)
docker-compose up -d
```

#### Deploy Manual com Docker
```bash
# 1. Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas credenciais

# 2. Build da imagem Docker (passando as variáveis de ambiente)
npm run docker:build

# 3. Execute o container
npm run docker:run
```

#### Deploy Manual Alternativo
```bash
# 1. Build da aplicação localmente
npm run build:prod

# 2. Build da imagem Docker com build args
docker build \
  --build-arg EMAILJS_PUBLIC_KEY=sua_chave_publica \
  --build-arg EMAILJS_SERVICE_ID=seu_service_id \
  --build-arg EMAILJS_TEMPLATE_ID=seu_template_id \
  --build-arg EMAILJS_TO_EMAIL=seu_email@exemplo.com \
  -t freelancer-app .

# 3. Execute o container
docker run -d -p 80:80 --name freelancer-container freelancer-app
```

### ⚠️ Importante para Docker

O build Docker requer as variáveis de ambiente do EmailJS durante a compilação. Certifique-se de:

1. **Ter o arquivo `.env` configurado** antes de executar `docker-compose up`
2. **Ou passar as variáveis como build args** no comando docker build
3. **As variáveis são necessárias no momento do build**, não apenas na execução

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