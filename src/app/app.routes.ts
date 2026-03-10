import { Routes } from '@angular/router'

import { Home } from './features/home/pages/home/home'
import { Login } from './features/auth/pages/login/login'

import { RegistroMascotasComponent } from './features/mascotas/pages/registro-mascotas/registro-mascotas.component'
import { ListaMascotasComponent } from './features/mascotas/pages/lista-mascotas/lista-mascotas.component'

import { AgendarCitaComponent } from './features/citas/pages/agendar-citas/agendar-citas.component'
import { ListaCitasComponent } from './features/citas/pages/lista-citas/lista-citas.component'
import { CalendarioCitasComponent } from './features/citas/pages/calendario-citas/calendario-citas.component'

import { ListaPropietariosComponent } from './features/propietarios/pages/lista-propietarios/lista-propietarios.component'
import { RegistroPropietariosComponent } from './features/propietarios/pages/registro-propietarios/registro-propietarios.component'
import { HistorialMascotaComponent } from './features/mascotas/pages/historial-mascotas/historial-mascotas.component'

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'registro-mascota',
    component: RegistroMascotasComponent
  },

  {
    path: 'lista-mascotas',
    component: ListaMascotasComponent
  },

  {
    path: 'agendar-cita',
    component: AgendarCitaComponent
  },

  {
    path: 'agendar-cita/:id',
    component: AgendarCitaComponent
  },

  {
    path: 'lista-citas',
    component: ListaCitasComponent
  },

  {
    path: 'propietarios',
    component: ListaPropietariosComponent
  },

  {
    path: 'registro-propietarios',
    component: RegistroPropietariosComponent
  },

  {
    path: 'registro-propietarios/:id',
    component: RegistroPropietariosComponent
  },

  {
    path: 'calendario-citas',
    component: CalendarioCitasComponent
  },
  {
  path: 'historial-mascota/:id',
  component: HistorialMascotaComponent
},

]