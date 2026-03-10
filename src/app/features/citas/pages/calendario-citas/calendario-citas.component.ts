import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CitaService } from '../../services/citas.service'
import { MascotaService } from '../../../mascotas/services/mascota.service'
import { PropietariosService } from '../../../propietarios/services/propietarios.service'

@Component({
  selector: 'app-calendario-citas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendario-citas.component.html',
  styleUrls: ['./calendario-citas.component.css']
})

export class CalendarioCitasComponent implements OnInit {

  citas:any[] = []

  constructor(
    private citaService: CitaService,
    private mascotaService: MascotaService,
    private propietariosService: PropietariosService
  ){}

  ngOnInit(){
    this.citas = this.citaService.obtenerCitas()
  }

  obtenerNombreMascota(id:number){

    const mascota = this.mascotaService
      .obtenerMascotas()
      .find(m => m.id == id)

    return mascota ? mascota.nombre : 'Desconocido'
  }

  obtenerNombrePropietario(id:number){

    const propietario = this.propietariosService
      .obtenerPropietarios()
      .find(p => p.id == id)

    return propietario ? propietario.nombre : 'Desconocido'
  }

}