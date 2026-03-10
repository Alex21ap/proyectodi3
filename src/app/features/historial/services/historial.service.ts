import { Injectable } from '@angular/core'
import { Historial } from '../../../core/models/historial'

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private historial: Historial[] = []

  agregarRegistro(registro: Historial): void {
    this.historial.push(registro)
  }

  obtenerHistorial(): Historial[] {
    return this.historial
  }

}