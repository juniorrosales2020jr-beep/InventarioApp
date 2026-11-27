
import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'
import { ProductosService } from '../domain/productos.service'

@Component({
  standalone: false,
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cantidadProductos: number = 0
  totalStock: number = 0
  cantidadCategorias: number = 0
  cantidadDestacados: number = 0
  valorInventario: number = 0

  constructor(
    private productosService: ProductosService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    this.cargarEstadisticas()
  }

  cargarEstadisticas(): void {

    const productos = this.productosService.buscar()

    // Cantidad de productos registrados
    this.cantidadProductos = productos.length

    // Total de unidades disponibles
    this.totalStock = productos.reduce(
      (total, producto) => total + producto.stock,
      0
    )

    // Cantidad de categorías diferentes
    this.cantidadCategorias = new Set(
      productos.map(producto => producto.categoria)
    ).size

    // Cantidad de productos destacados
    this.cantidadDestacados =
      this.productosService.obtenerDestacados().length

    // Valor económico del inventario
    this.valorInventario = productos.reduce(
      (total, producto) =>
        total + (producto.precio * producto.stock),
      0
    )
  }

  get valorInventarioFormateado(): string {

    const valor = this.valorInventario
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    return 'L ' + valor
  }

  navegar(ruta: string): void {
    this.routerExtensions.navigate([ruta])
  }

  onDrawerButtonTap(): void {

    const sideDrawer =
      <RadSideDrawer>Application.getRootView()

    sideDrawer.showDrawer()
  }
}
