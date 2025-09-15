import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../services/config.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  sectionTitle = 'Entre em Contato';
  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private configService: ConfigService
  ) {}

  ngOnInit() {
    this.createForm();
    this.loadConfigAndInitEmailJS();
  }

  loadConfigAndInitEmailJS() {
    this.configService.loadConfig().subscribe({
      next: (config) => {
        this.initEmailJS();
      },
      error: (error) => {
        console.error('Erro ao carregar configuração:', error);
      }
    });
  }

  initEmailJS() {
    const config = this.configService.getEmailJSConfig();
    if (config.publicKey) {
      emailjs.init(config.publicKey);
    } else {
      console.error('EmailJS Public Key não encontrada na configuração');
    }
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const config = this.configService.getEmailJSConfig();
    
    if (!config.serviceId || !config.templateId) {
      this.isSubmitting = false;
      this.submitError = true;
      this.errorMessage = 'Configuração do EmailJS não encontrada. Verifique as variáveis de ambiente.';
      return;
    }

    const templateParams = {
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
      to_email: config.toEmail
    };

    emailjs.send(
      config.serviceId,
      config.templateId,
      templateParams
    ).then(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.contactForm.reset();
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }).catch((error) => {
      this.isSubmitting = false;
      this.submitError = true;
      this.errorMessage = 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.';
      console.error('EmailJS error:', error);
    });
  }

  // Getters para facilitar a validação no template
  get nameControl() { return this.contactForm.get('name'); }
  get emailControl() { return this.contactForm.get('email'); }
  get subjectControl() { return this.contactForm.get('subject'); }
  get messageControl() { return this.contactForm.get('message'); }
}