import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { CitaService } from '../../../citas/services/citas.service'

@Component({
  selector: 'app-historial-mascota',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial-mascotas.component.html',
  styleUrls: ['./historial-mascotas.component.css']
})
export class HistorialMascotaComponent {

  citas:any[] = []
  mascotaId:number = 0

  constructor(
    private route: ActivatedRoute,
    private citaService: CitaService
  ){

    this.mascotaId = Number(this.route.snapshot.paramMap.get('id'))

    const todasLasCitas = this.citaService.obtenerCitas()

    this.citas = todasLasCitas.filter(
      (c:any) => c.mascotaId === this.mascotaId
    )

  }

}