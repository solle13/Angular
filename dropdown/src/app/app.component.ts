import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  items = [{data:'Opcion 1'}, {data: 'Opcion 2'}, {data: 'Opcion 3'}, {data: 'Opcion 4'}, {data: 'Opcion 5'}, {data: 'Opcion 6'}, {data: 'Opcion 7'}, {data: 'Opcion 8'}];

  constructor(){

  } 

  ngOnInit(){

  } 

  dropdownSelect($event){
    console.log($event);
  } 
}
