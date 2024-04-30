import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  agendas = [
    { name: 'Agenda 1' },
    { name: 'Agenda 2' },
  ];
  newAgendaName = '';

  constructor(private router: Router) { }

  logout() {
    this.router.navigate(['/login']);
  }
  createAgenda() {
    this.agendas.push({
      name: this.newAgendaName,
    });
    this.newAgendaName = '';
  }
}