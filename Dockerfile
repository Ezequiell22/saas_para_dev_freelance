# Multi-stage build para otimizar o tamanho da imagem final
# Estágio 1: Build da aplicação
FROM node:18-alpine AS build

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências (incluindo devDependencies para o build)
RUN npm ci

# Copiar código fonte
COPY . .

# Definir variáveis de ambiente para o build
ARG EMAILJS_PUBLIC_KEY
ARG EMAILJS_SERVICE_ID
ARG EMAILJS_TEMPLATE_ID
ARG EMAILJS_TO_EMAIL

ENV EMAILJS_PUBLIC_KEY=$EMAILJS_PUBLIC_KEY
ENV EMAILJS_SERVICE_ID=$EMAILJS_SERVICE_ID
ENV EMAILJS_TEMPLATE_ID=$EMAILJS_TEMPLATE_ID
ENV EMAILJS_TO_EMAIL=$EMAILJS_TO_EMAIL

# Gerar arquivo de configuração e fazer build para produção
RUN npm run build:prod

# Estágio 2: Servir a aplicação com Nginx
FROM nginx:alpine AS production

# Copiar configuração customizada do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar arquivos buildados do estágio anterior
COPY --from=build /app/dist/freelancer-angular /usr/share/nginx/html

# Expor porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]