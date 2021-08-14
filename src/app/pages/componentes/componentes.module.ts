import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { ComponentesComponent } from './componentes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule, ControlsModule, IndicatorsModule } from '@app/shared';


@NgModule({
  declarations: [
    ComponentesComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule,
    ReactiveFormsModule,
    ButtonsModule,
    ControlsModule,
    IndicatorsModule
  ]
})
export class ComponentesModule { }
