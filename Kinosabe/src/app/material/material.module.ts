import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatCardModule, MatBadgeModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatInputModule, MatRadioModule } from '@angular/material';

const material = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatBadgeModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatInputModule,
  MatRadioModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
