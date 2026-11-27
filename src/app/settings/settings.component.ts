
import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import {
  Application,
  Dialogs,
  isAndroid,
  isIOS
} from '@nativescript/core'

@Component({
  standalone: false,
  selector: 'Settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  nombreAplicacion: string = 'InventarioApp'
  version: string = '1.0.0'
  plataforma: string = ''
  framework: string = 'NativeScript + Angular'
  lenguaje: string = 'TypeScript'
  almacenamiento: string = 'En memoria'
  proyecto: string = 'Módulo 2'

  constructor() {}

  ngOnInit(): void {
    this.detectarPlataforma()
  }

  detectarPlataforma(): void {

    if (isAndroid) {
      this.plataforma = 'Android'
    } else if (isIOS) {
      this.plataforma = 'iOS'
    } else {
      this.plataforma = 'Desconocida'
    }

  }

  async mostrarAcercaDe(): Promise<void> {

    await Dialogs.alert({
      title: 'Acerca de InventarioApp',
      message:
        'InventarioApp\n' +
        'Versión ' + this.version + '\n\n' +
        'Sistema móvil de gestión de inventario.\n\n' +
        'Permite consultar, buscar, clasificar y destacar productos.\n\n' +
        'Proyecto académico del Módulo 2 del curso ' +
        'NativeScript, Angular y Redux.',
      okButtonText: 'Aceptar'
    })

  }

  onDrawerButtonTap(): void {

    const sideDrawer =
      <RadSideDrawer>Application.getRootView()

    sideDrawer.showDrawer()

  }

}
