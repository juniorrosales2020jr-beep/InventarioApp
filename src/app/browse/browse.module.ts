import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import {
  NativeScriptCommonModule,
  registerElement
} from '@nativescript/angular'

import { PullToRefresh } from '@nativescript-community/ui-pulltorefresh'

import { BrowseRoutingModule } from './browse-routing.module'
import { BrowseComponent } from './browse.component'

registerElement('PullToRefresh', () => PullToRefresh)

@NgModule({
  imports: [
    NativeScriptCommonModule,
    BrowseRoutingModule
  ],
  declarations: [BrowseComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BrowseModule {}