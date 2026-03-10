import { Component, OnInit } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { PropietariosService } from '../../services/propietarios.service'
import { Propietario } from '../../../../core/models/propietario'

@Component({
  selector: 'app-lista-propietarios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-propietarios.component.html',
  styleUrls: ['./lista-propietarios.component.css']
})
export class ListaPropietariosComponent implements OnInit {

  propietarios: Propietario[] = []

  constructor(
    private propietariosService: PropietariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarPropietarios()
  }

  cargarPropietarios(){
    this.propietarios = this.propietariosService.obtenerPropietarios()
  }

  editar(id:number){
    this.router.navigate(['/registro-propietarios', id])
  }

  eliminar(id:number){

    const confirmar = confirm('¿Eliminar propietario?')

    if(confirmar){
      this.propietariosService.eliminarPropietario(id)
      this.cargarPropietarios()
    }

  }

}