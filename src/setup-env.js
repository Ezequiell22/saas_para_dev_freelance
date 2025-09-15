// Script para configurar as variáveis de ambiente do EmailJS no Angular
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Verifica se as variáveis de ambiente necessárias estão definidas
const requiredEnvVars = [
  'EMAILJS_PUBLIC_KEY',
  'EMAILJS_SERVICE_ID',
  'EMAILJS_TEMPLATE_ID',
  'EMAILJS_TO_EMAIL'
];

const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error(`Erro: As seguintes variáveis de ambiente são necessárias: ${missingVars.join(', ')}`);
  process.exit(1);
}

// Caminhos para os arquivos de ambiente
const envFilePath = path.join(__dirname, 'environments', 'environment.ts');
const envProdFilePath = path.join(__dirname, 'environments', 'environment.prod.ts');

// Função para atualizar o arquivo de ambiente
function updateEnvironmentFile(filePath) {
  try {
    // Lê o arquivo de ambiente
    let content = fs.readFileSync(filePath, 'utf8');

    // Substitui as variáveis de ambiente
    content = content.replace('YOUR_EMAILJS_PUBLIC_KEY', process.env.EMAILJS_PUBLIC_KEY);
    content = content.replace('YOUR_EMAILJS_SERVICE_ID', process.env.EMAILJS_SERVICE_ID);
    content = content.replace('YOUR_EMAILJS_TEMPLATE_ID', process.env.EMAILJS_TEMPLATE_ID);
    content = content.replace('YOUR_EMAILJS_TO_EMAIL', process.env.EMAILJS_TO_EMAIL);

    // Escreve o arquivo atualizado
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Arquivo ${filePath} atualizado com sucesso.`);
  } catch (error) {
    console.error(`Erro ao atualizar o arquivo ${filePath}:`, error);
    process.exit(1);
  }
}

// Atualiza os arquivos de ambiente
updateEnvironmentFile(envFilePath);
updateEnvironmentFile(envProdFilePath);

console.log('Configuração de ambiente concluída com sucesso!');