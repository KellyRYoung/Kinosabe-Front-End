import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatCardModule, MatBadgeModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatInputModule } from '@angular/material';

const material = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatBadgeModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatInputModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
