import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router, RouterModule, ActivatedRoute } from '@angular/router'

import { PropietariosService } from '../../services/propietarios.service'
import { Propietario } from '../../../../core/models/propietario'

@Component({
  selector: 'app-registro-propietarios',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './registro-propietarios.component.html',
  styleUrls: ['./registro-propietarios.component.css']
})
export class RegistroPropietariosComponent implements OnInit {

  propietario: Propietario = {
    id: 0,
    nombre: '',
    telefono: '',
    email: ''
  }

  editando = false

  constructor(
    private propietariosService: PropietariosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'))

    if(id){

      const propietarioEncontrado =
        this.propietariosService.obtenerPropietarioPorId(id)

      if(propietarioEncontrado){
        this.propietario = propietarioEncontrado
        this.editando = true
      }

    }

  }

  guardar(){

    if(this.editando){

      this.propietariosService.actualizarPropietario(this.propietario)

    }else{

      const propietarios = this.propietariosService.obtenerPropietarios()

      const nuevoId = propietarios.length > 0
        ? Math.max(...propietarios.map(p => p.id)) + 1
        : 1

      this.propietario.id = nuevoId

      this.propietariosService.agregarPropietario(this.propietario)

    }

    this.router.navigate(['/propietarios'])

  }

}