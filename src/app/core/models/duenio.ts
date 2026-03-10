import { Persona } from './persona'

export class Duenio extends Persona {

  constructor(
    id: number,
    nombre: string,
    public telefono: string
  ){
    super(id, nombre)
  }

}