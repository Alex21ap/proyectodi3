import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router, RouterModule } from '@angular/router'

import { CitaService } from '../../services/citas.service'
import { MascotaService } from '../../../mascotas/services/mascota.service'
import { PropietariosService } from '../../../propietarios/services/propietarios.service'

import { Cita } from '../../../../core/models/cita'
import { ResaltarCitaDirective } from '../../../../shared/directives/resaltarcita.directive'

@Component({
  selector: 'app-lista-citas',
  standalone: true,
  imports: [CommonModule, RouterModule, ResaltarCitaDirective],
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {

  citas: Cita[] = []

  constructor(
    private citaService: CitaService,
    private mascotasService: MascotaService,
    private propietariosService: PropietariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.citas = this.citaService.obtenerCitas()
  }

  eliminar(id:number){
    this.citaService.eliminarCita(id)
    this.citas = this.citaService.obtenerCitas()
  }

  editar(id:number){
    this.router.navigate(['/agendar-cita', id])
  }

  obtenerNombreMascota(id:number){
    const mascota = this.mascotasService
      .obtenerMascotas()
      .find(m => m.id == id)

    return mascota ? mascota.nombre : ''
  }

  obtenerNombrePropietario(id:number){
    const propietario = this.propietariosService
      .obtenerPropietarios()
      .find(p => p.id == id)

    return propietario ? propietario.nombre : ''
  }

}