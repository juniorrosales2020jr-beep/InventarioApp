
import { Component, OnInit } from '@angular/core'
import { NgModel } from '@angular/forms'

import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, ItemEventData } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'

import { Producto } from '../domain/producto.model'
import { ProductosService } from '../domain/productos.service'

@Component({
  standalone: false,
  selector: 'Search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  resultados: Producto[] = []

  textoBusqueda: string = ''

  constructor(
    private productosService: ProductosService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {

    this.buscarProductos()

  }

  // Buscar productos si el campo es válido
  buscarProductos(control?: NgModel): void {

    if (control?.invalid) {
      return
    }

    this.resultados = this.productosService.buscar(
      this.textoBusqueda
    )

  }

  // Limpiar el formulario y mostrar todos los productos
  limpiarBusqueda(): void {

    this.textoBusqueda = ''

    this.buscarProductos()

  }

  // Navegar a la vista de detalle
  onItemTap(event: ItemEventData): void {

    const producto = this.resultados[event.index]

    if (producto) {

      this.routerExtensions.navigate(
        ['/detalle', producto.id]
      )

    }
  }

  // Abrir el menú lateral
  onDrawerButtonTap(): void {

    const sideDrawer = <RadSideDrawer>Application.getRootView()

    sideDrawer.showDrawer()

  }
}
