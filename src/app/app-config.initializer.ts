import { ConfigService } from './services/config.service';

export function initializeApp(configService: ConfigService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      configService.loadConfig().subscribe({
        next: (config) => {
          console.log('Configuração carregada com sucesso:', config);
          resolve(config);
        },
        error: (error) => {
          console.error('Erro ao carregar configuração:', error);
          // Mesmo com erro, continuamos a inicialização
          resolve(null);
        }
      });
    });
  };
}