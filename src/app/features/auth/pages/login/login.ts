import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {

    this.errorMessage = '';

    const validEmail = 'admin@petlife.com';
    const validPassword = 'admin123';

    if (this.email === validEmail && this.password === validPassword) {

      const userData = {
        email: this.email,
        loggedIn: true
      };

      // Guardar usuario
      if (this.rememberMe) {
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        sessionStorage.setItem('user', JSON.stringify(userData));
      }

      // Redirigir al sistema
      this.router.navigate(['/propietarios']).then(() => {
        location.reload();
      });

    } else {
      this.errorMessage = 'Correo o contraseña incorrectos.';
    }

  }

}