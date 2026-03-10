import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms'
import { MascotaService } from '../../services/mascota.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-registro-mascotas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-mascotas.component.html',
  styleUrls: ['./registro-mascotas.component.css']
})
export class RegistroMascotasComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private fb: FormBuilder,
    public mascotaService: MascotaService,
    private router: Router
  ){

    this.formulario = this.fb.group({
      nombre: [''],
      especie: [''],
      raza: [''],
      edad: [''],
      duenioId: [''],
      observaciones: ['']
    })

  }

  ngOnInit(){

    if(this.mascotaService.mascotaSeleccionada){

      this.formulario.patchValue(
        this.mascotaService.mascotaSeleccionada
      )

    }

  }

  registrarMascota(){

    if(this.mascotaService.mascotaSeleccionada){

      this.mascotaService.actualizarMascota(
        this.formulario.value
      )

      alert("Mascota actualizada correctamente")

    }else{

      this.mascotaService.agregarMascota(
        this.formulario.value
      )

      alert("Mascota registrada correctamente")

    }

    this.formulario.reset()

    this.mascotaService.mascotaSeleccionada = null

    this.router.navigate(['/lista'])

  }

  cancelar(){

    this.formulario.reset()

    this.mascotaService.mascotaSeleccionada = null

    this.router.navigate(['/lista'])

  }

}