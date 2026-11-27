import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { DetalleComponent } from './detalle.component'

const routes: Routes = [
  {
    path: ':id',
    component: DetalleComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class DetalleRoutingModule {}