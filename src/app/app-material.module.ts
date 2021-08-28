import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const modules = [CommonModule, MatFormFieldModule, MatInputModule];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class AppMaterialModule {}
