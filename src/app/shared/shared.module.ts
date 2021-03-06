import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusPipe } from './pipes/status.pipe';
import { SeverityPipe } from './pipes/severity.pipe';

@NgModule({
  // Modules: for use in this module (not required for export)
  imports: [
    CommonModule
  ],

  // Directives (pipes, components) for use in this module, or export
  declarations: [
    StatusPipe,
    SeverityPipe
  ],

  // Make modules and directives available to other modules
  exports: [ 
    CommonModule,
    StatusPipe,
    SeverityPipe
]
})
export class SharedModule { }
