import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { DropDownComponent } from "src/components/drop-down/drop-down.component";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    DropDownComponent
  ],
  exports:[
    DropDownComponent
  ]
}) 
export class DropDownModule { }