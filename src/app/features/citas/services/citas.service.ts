import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  citas: any[] = []

  agregarCita(cita: any){
    this.citas.push(cita)
  }

  obtenerCitas(){
    return this.citas
  }

  eliminarCita(id:number){
    this.citas = this.citas.filter(c => c.id !== id)
  }

  actualizarCita(id:number, datos:any){

    const index = this.citas.findIndex(c => c.id === id)

    if(index !== -1){

      this.citas[index] = {
        ...this.citas[index],
        ...datos
      }

    }

  }

}