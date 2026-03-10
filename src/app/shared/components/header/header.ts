import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnInit {

  isDarkMode: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const userLocal = localStorage.getItem('user');
    const userSession = sessionStorage.getItem('user');

    this.isLoggedIn = !!(userLocal || userSession);
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  logout() {

    // eliminar datos de sesión
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');

    // redirigir al home
    this.router.navigate(['/']).then(() => {
      location.reload();
    });

  }

}