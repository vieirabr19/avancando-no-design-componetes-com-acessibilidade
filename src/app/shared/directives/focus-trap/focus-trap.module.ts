import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FocusTrapDirective } from "./focus-trap.derictive";

@NgModule({
  declarations: [FocusTrapDirective],
  imports: [CommonModule],
  exports: [FocusTrapDirective],
})
export class FocusTrapModule{}