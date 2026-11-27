
import {
  Component,
  OnInit,
  NgZone,
  ChangeDetectorRef,
  ViewChild,
  ElementRef
} from '@angular/core'

import { RadSideDrawer } from 'nativescript-ui-sidedrawer'

import {
  Application,
  GestureEventData,
  ItemEventData,
  ListView,
  View,
  isAndroid
} from '@nativescript/core'

import { RouterExtensions } from '@nativescript/angular'

import { Producto } from '../domain/producto.model'
import { ProductosService } from '../domain/productos.service'

@Component({
  standalone: false,
  selector: 'Featured',
  templateUrl: './featured.component.html',
})
export class FeaturedComponent implements OnInit {

  @ViewChild('listaDestacados')
  listaDestacados!: ElementRef<ListView>

  productos: Producto[] = []

  cantidadDestacados: number = 0

  animando: boolean = false

  constructor(
    private productosService: ProductosService,
    private routerExtensions: RouterExtensions,
    private ngZone: NgZone,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.cargarProductos()

  }

  // Cargar productos y actualizar el contador
  cargarProductos(): void {

    this.productos = this.productosService.buscar()

    this.cantidadDestacados =
      this.productosService.obtenerDestacados().length

  }

  // Detectar una pulsación prolongada
  async onLongPress(
    event: GestureEventData,
    producto: Producto
  ): Promise<void> {

    // Evitar animaciones simultáneas
    if (this.animando) {
      return
    }

    this.animando = true

    console.log('Evento:', event.eventName)
    console.log('Producto:', producto.nombre)

    // Obtener la estrella que recibió el gesto
    const estrella = event.object as View

    try {

      // Restablecer la posición inicial
      estrella.rotate = 0

      // Ejecutar una rotación completa
      await estrella.animate({
        rotate: 360,
        duration: 800
      })

    } catch (error) {

      console.log('Error de animación:', error)

    } finally {

      estrella.rotate = 0

      this.animando = false

    }

    // Actualizar el estado del producto
    this.ngZone.run(() => {

      const actualizado =
        this.productosService.alternarDestacado(
          producto.id
        )

      if (!actualizado) {
        return
      }

      this.cargarProductos()

      this.changeDetector.detectChanges()

      if (this.listaDestacados) {

        this.listaDestacados.nativeElement.refresh()

      }

      if (actualizado.destacado) {

        this.mostrarToast(
          actualizado.nombre + ' agregado a destacados'
        )

      } else {

        this.mostrarToast(
          actualizado.nombre + ' eliminado de destacados'
        )

      }

    })
  }

  // Mostrar notificación Toast
  mostrarToast(mensaje: string): void {

    if (isAndroid) {

      android.widget.Toast.makeText(
        Application.android.context,
        mensaje,
        android.widget.Toast.LENGTH_SHORT
      ).show()

    }
  }

  // Navegar hacia el detalle del producto
  onItemTap(event: ItemEventData): void {

    if (this.animando) {
      return
    }

    const producto = this.productos[event.index]

    if (producto) {

      this.routerExtensions.navigate(
        ['/detalle', producto.id]
      )

    }
  }

  // Abrir menú lateral
  onDrawerButtonTap(): void {

    const sideDrawer = <RadSideDrawer>Application.getRootView()

    sideDrawer.showDrawer()

  }
}
