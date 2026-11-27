
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
  EventData,
  ItemEventData,
  Dialogs,
  isAndroid,
  ListView
} from '@nativescript/core'

import { RouterExtensions } from '@nativescript/angular'
import { PullToRefresh } from '@nativescript-community/ui-pulltorefresh'

import { Producto } from '../domain/producto.model'
import { ProductosService } from '../domain/productos.service'

@Component({
  standalone: false,
  selector: 'Browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent implements OnInit {

  @ViewChild('listaProductos')
  listaProductos!: ElementRef<ListView>

  productos: Producto[] = []

  private productosNuevos: Omit<Producto, 'id'>[] = [
    {
      nombre: 'Impresora',
      descripcion: 'Impresora multifuncional.',
      precio: 3200,
      stock: 10,
      categoria: 'Tecnología',
      imagen: 'res://impresora'
    },
    {
      nombre: 'Memoria USB',
      descripcion: 'Memoria USB de 64 GB.',
      precio: 450,
      stock: 30,
      categoria: 'Accesorios',
      imagen: 'res://usb'
    },
    {
      nombre: 'Webcam',
      descripcion: 'Cámara web Full HD.',
      precio: 950,
      stock: 12,
      categoria: 'Tecnología',
      imagen: 'res://webcam'
    },
    {
      nombre: 'Bocina',
      descripcion: 'Bocina portátil Bluetooth.',
      precio: 750,
      stock: 18,
      categoria: 'Audio',
      imagen: 'res://bocina'
    },
    {
      nombre: 'Disco SSD',
      descripcion: 'Unidad de almacenamiento de 512 GB.',
      precio: 1800,
      stock: 9,
      categoria: 'Tecnología',
      imagen: 'res://ssd'
    }
  ]

  constructor(
    private productosService: ProductosService,
    private routerExtensions: RouterExtensions,
    private ngZone: NgZone,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargarProductos()
  }

  // Cargar todos los productos
  cargarProductos(): void {

    this.productos = this.productosService.buscar()

  }

  // Actualizar visualmente el listado
  refrescarListado(): void {

    this.ngZone.run(() => {

      this.cargarProductos()

      this.changeDetector.detectChanges()

      if (this.listaProductos) {

        this.listaProductos.nativeElement.refresh()

      }

    })
  }

  // Actualizar mediante Pull to Refresh
  actualizarProductos(event: EventData): void {

    const pullRefresh = event.object as PullToRefresh

    setTimeout(() => {

      try {

        const indice = Math.floor(
          Math.random() * this.productosNuevos.length
        )

        const nuevoProducto = this.productosNuevos[indice]

        this.productosService.agregar(nuevoProducto)

        this.refrescarListado()

      } finally {

        pullRefresh.refreshing = false

      }

    }, 1000)
  }

  // Mostrar Toast nativo de Android
  mostrarToast(mensaje: string): void {

    if (isAndroid) {

      android.widget.Toast.makeText(
        Application.android.context,
        mensaje,
        android.widget.Toast.LENGTH_SHORT
      ).show()

    }
  }

  // Cambiar categoría mediante diálogo Action
  async cambiarCategoria(producto: Producto): Promise<void> {

    const categorias: string[] = [
      'Tecnología',
      'Accesorios',
      'Audio',
      'Oficina',
      'Otros'
    ]

    const categoriaSeleccionada = await Dialogs.action({
      title: 'Cambiar categoría',
      message: 'Selecciona una categoría para ' + producto.nombre,
      cancelButtonText: 'Cancelar',
      actions: categorias
    })

    if (!categorias.includes(categoriaSeleccionada)) {
      return
    }

    if (categoriaSeleccionada === producto.categoria) {
      return
    }

    this.ngZone.run(() => {

      const actualizado = this.productosService.cambiarCategoria(
        producto.id,
        categoriaSeleccionada
      )

      if (actualizado) {

        this.refrescarListado()

        this.mostrarToast(
          'Categoría actualizada correctamente'
        )

      }

    })
  }

  // Navegar a la vista de detalle
  onItemTap(event: ItemEventData): void {

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
