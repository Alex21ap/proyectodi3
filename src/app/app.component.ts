import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Header, Footer],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;

  ngOnInit() {
    const userLocal = localStorage.getItem('user');
    const userSession = sessionStorage.getItem('user');

    this.isLoggedIn = !!(userLocal || userSession);
  }

}