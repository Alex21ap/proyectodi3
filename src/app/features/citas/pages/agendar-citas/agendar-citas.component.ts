import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'

import { CitaService } from '../../services/citas.service'
import { MascotaService } from '../../../mascotas/services/mascota.service'

@Component({
  selector: 'app-agendar-cita',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './agendar-citas.component.html',
  styleUrls: ['./agendar-citas.component.css']
})
export class AgendarCitaComponent implements OnInit {

  formulario!: FormGroup
  editando = false
  idCita!: number

  constructor(
    private fb: FormBuilder,
    private citaService: CitaService,
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){

    this.formulario = this.fb.group({
      mascotaId: [''],
      fecha: [''],
      hora: [''],
      motivo: [''],
      observaciones: ['']
    })

    const id = this.route.snapshot.paramMap.get('id')

    if(id !== null){

      this.editando = true
      this.idCita = Number(id)

      const cita = this.citaService.obtenerCitas()
      .find(c => c.id == this.idCita)

      if(cita){

        this.formulario.patchValue({
          mascotaId: cita.mascotaId,
          fecha: cita.fecha,
          hora: cita.hora,
          motivo: cita.motivo,
          observaciones: cita.observaciones
        })

      }

    }

  }

  guardar(){

    if(this.editando){

      this.citaService.actualizarCita(this.idCita, this.formulario.value)

    }else{

      const mascota = this.mascotaService
      .obtenerMascotas()
      .find(m => m.id == this.formulario.value.mascotaId)

      if(!mascota) return

      const nuevaCita = {

        id: Date.now(),
        mascotaId: Number(this.formulario.value.mascotaId),
        propietarioId: mascota.duenioId,
        fecha: this.formulario.value.fecha,
        hora: this.formulario.value.hora,
        motivo: this.formulario.value.motivo,
        observaciones: this.formulario.value.observaciones,
        estado: 'pendiente'

      }

      this.citaService.agregarCita(nuevaCita)

    }

    this.router.navigate(['/lista-citas'])

  }

}