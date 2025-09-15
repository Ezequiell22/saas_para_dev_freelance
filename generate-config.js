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
  console.error(`❌ Erro: As seguintes variáveis de ambiente são necessárias: ${missingVars.join(', ')}`);
  console.error('📝 Certifique-se de que o arquivo .env existe e contém todas as variáveis necessárias.');
  process.exit(1);
}

// Cria a configuração
const config = {
  emailjs: {
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    serviceId: process.env.EMAILJS_SERVICE_ID,
    templateId: process.env.EMAILJS_TEMPLATE_ID,
    toEmail: process.env.EMAILJS_TO_EMAIL
  }
};

// Cria o diretório de configuração se não existir
const configDir = path.join(__dirname, 'src', 'assets', 'config');
if (!fs.existsSync(configDir)) {
  fs.mkdirSync(configDir, { recursive: true });
}

// Escreve o arquivo de configuração
const configPath = path.join(configDir, 'app-config.json');
fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');

console.log('✅ Arquivo de configuração gerado com sucesso!');
console.log(`📁 Localização: ${configPath}`);
console.log('🔒 As credenciais foram carregadas do arquivo .env');