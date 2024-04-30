import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  login!: string;
  password!: string;
  private apiUrl = 'http://localhost:3000/api/v1';

  constructor(private router: Router) { }

  loginUser(login: string, password: string): void {
    fetch(`${this.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ login, password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/home']);
        } else {
          alert('Invalid login or password');
        }
      })
      .catch(() => alert('Server error'));
  }
}