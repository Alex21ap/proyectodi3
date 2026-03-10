import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MascotaService } from '../../services/mascota.service'
import { PropietariosService } from '../../../propietarios/services/propietarios.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-lista-mascotas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent {

  mascotas: any[] = []

  constructor(
    private mascotaService: MascotaService,
    private propietariosService: PropietariosService,
    private router: Router
  ){
    this.mascotas = this.mascotaService.obtenerMascotas()
  }

  obtenerNombreDuenio(id:number){

    const propietario = this.propietariosService.obtenerPropietarioPorId(id)

    return propietario ? propietario.nombre : "Sin dueño"

  }

  verHistorial(mascota:any){

    this.router.navigate(['/historial-mascota', mascota.id])

  }

  editarMascota(mascota:any){

    this.mascotaService.seleccionarMascota(mascota)

    this.router.navigate(['/registro-mascota'])

  }

  eliminarMascota(mascota:any){

    const confirmar = confirm("¿Eliminar mascota?")

    if(confirmar){

      this.mascotaService.eliminarMascota(mascota)

      this.mascotas = this.mascotaService.obtenerMascotas()

    }

  }

}