import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

// Importamos nuestro servicio de productos
import { ProductosService } from './domain/productos.service'

@NgModule({
  bootstrap: [AppComponent],
  imports: [AppRoutingModule, NativeScriptModule, NativeScriptUISideDrawerModule],
  declarations: [AppComponent],

  // Registramos el servicio a nivel global
  providers: [ProductosService],

  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}