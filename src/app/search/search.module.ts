
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'

import {
  NativeScriptCommonModule,
  NativeScriptFormsModule
} from '@nativescript/angular'

import { SearchRoutingModule } from './search-routing.module'
import { SearchComponent } from './search.component'

import {
  LongitudMinimaDirective
} from '../directivas/longitud-minima.directive'

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    SearchRoutingModule
  ],

  declarations: [
    SearchComponent,
    LongitudMinimaDirective
  ],

  schemas: [NO_ERRORS_SCHEMA],
})
export class SearchModule {}
