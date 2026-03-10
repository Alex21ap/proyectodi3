import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  mascotas: any[] = []
  mascotaSeleccionada: any = null
  contadorId: number = 1

  agregarMascota(mascota: any){
    mascota.id = this.contadorId++ 
    this.mascotas.push(mascota)
  }

  obtenerMascotas(){
    return this.mascotas
  }

  seleccionarMascota(mascota: any){
    this.mascotaSeleccionada = mascota
  }

  actualizarMascota(datosActualizados: any){

    const index = this.mascotas.findIndex(
      m => m === this.mascotaSeleccionada
    )

    if(index !== -1){

      this.mascotas[index].nombre = datosActualizados.nombre
      this.mascotas[index].especie = datosActualizados.especie
      this.mascotas[index].raza = datosActualizados.raza
      this.mascotas[index].edad = datosActualizados.edad
      this.mascotas[index].duenioId = datosActualizados.duenioId
      this.mascotas[index].observaciones = datosActualizados.observaciones

    }

    this.mascotaSeleccionada = null
  }

  eliminarMascota(mascota: any){
    this.mascotas = this.mascotas.filter(m => m !== mascota)
  }

  obtenerMascotaPorId(id:number){
    return this.mascotas.find(m => m.id === id)
  }

}