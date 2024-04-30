import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  login!: string;
  password!: string;
  apiUrl = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  loginUser(event: Event, login: string, password: string) {
    event.preventDefault();
    this.http.post(`${this.apiUrl}/login`, {
      login: this.login,
      password: this.password
    }).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      console.log(res);
      console.log(res.token);
    }
    );
  }
}
