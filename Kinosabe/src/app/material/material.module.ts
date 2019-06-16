import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatCardModule, MatBadgeModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
