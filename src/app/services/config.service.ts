import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface AppConfig {
  emailjs: {
    publicKey: string;
    serviceId: string;
    templateId: string;
    toEmail: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: AppConfig | null = null;

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<AppConfig> {
    if (this.config) {
      return of(this.config);
    }

    return this.http.get<any>('/assets/config/app-config.json')
      .pipe(
        map(config => {
          this.config = config;
          return config;
        }),
        catchError(error => {
          console.error('Erro ao carregar configuração:', error);
          // Fallback para configuração padrão em caso de erro
          const fallbackConfig: AppConfig = {
            emailjs: {
              publicKey: '',
              serviceId: '',
              templateId: '',
              toEmail: ''
            }
          };
          this.config = fallbackConfig;
          return of(fallbackConfig);
        })
      );
  }

  getConfig(): AppConfig | null {
    return this.config;
  }

  getEmailJSConfig() {
    return this.config?.emailjs || {
      publicKey: '',
      serviceId: '',
      templateId: '',
      toEmail: ''
    };
  }
}