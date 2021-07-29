import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableModuleRoutingModule } from './observable-module-routing.module';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { ObservablesComponent } from './observables/observables.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    TestObservableComponent,
    ObservablesComponent,

  ],
  imports: [
    CommonModule,
    ObservableModuleRoutingModule,
    AngularMaterialModule
  ]
})
export class ObservableModuleModule { }
