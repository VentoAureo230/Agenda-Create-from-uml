import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})

export class LoginComponent {
  login!: string;
  password!: string;

  constructor(private router: Router, private http: HttpClient) { }

  loginUser(login: string, password: string) {
    this.http.post('http://localhost:3000/login', { login: this.login, password: this.password }).subscribe((res: any) => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      } else {
        alert('Incorrect login or password');
      }
    });
  }
}
