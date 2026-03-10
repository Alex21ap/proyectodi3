import { Injectable } from '@angular/core'
import { Propietario } from '../../../core/models/propietario'

@Injectable({
  providedIn: 'root'
})
export class PropietariosService {

  propietarios: Propietario[] = [
    {id:1,nombre:'Ana Pérez',telefono:'985551234',email:'ana@mail.com'},
    {id:2,nombre:'Luis Gómez',telefono:'995556789',email:'luis@mail.com'}
  ]

  obtenerPropietarios(){
    return this.propietarios
  }

  obtenerPropietarioPorId(id:number){
    return this.propietarios.find(p => p.id === id)
  }

  agregarPropietario(propietario:Propietario){
    this.propietarios.push(propietario)
  }

  actualizarPropietario(propietario:Propietario){

    const index = this.propietarios.findIndex(p => p.id === propietario.id)

    if(index !== -1){
      this.propietarios[index] = propietario
    }

  }

  eliminarPropietario(id:number){
    this.propietarios = this.propietarios.filter(p => p.id !== id)
  }

}