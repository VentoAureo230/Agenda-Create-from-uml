import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  agendas = [
    { name: 'Agenda 1' },
    { name: 'Agenda 2' },
  ];

  contacts = [
    { name: 'Contact 1', phone: '123456789', email: '', site: '' },
    { name: 'Contact 2', phone: '987654321', email: '', site: '' },
  ];

  contactForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      newAgendaName: ['', Validators.required],
      newContactName: ['', Validators.required],
      newContactPhone: ['', [Validators.required, Validators.pattern('^((\\+|00)33\\s?|0)[67](\\s?\\d{2}){4}$')]],
      newContactEmail: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      newContactSite: ['', Validators.required],
    });
   }

  logout() {
    this.router.navigate(['/login']);
  }
  createAgenda() {
    this.agendas.push({
      name: this.contactForm.value.newAgendaName,
    });
    this.contactForm.reset();
  }

  createContact() {
    this.contacts.push({
      name: this.contactForm.value.newContactName,
      phone: this.contactForm.value.newContactPhone,
      email: this.contactForm.value.newContactEmail,
      site: this.contactForm.value.newContactSite,
    });
    this.contactForm.reset();
  }
}