import { Component, OnInit } from '@angular/core';
import { Output } from "@angular/core";
import { Input } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Renderer } from "@angular/core";
import { ElementRef } from "@angular/core";
import { SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Output() valueDropList: EventEmitter<any> = new EventEmitter();
  @Input() items: any;
  @Input() size: String = '';
  @Input() align: String = '';
  @Input() itemSelect: any;
  @Input() widthContent: any = '100%';
  @Input() tooltip: boolean = false;
  @Input() attr: String = '';

  @Input() lineaColor:string = '';

  @Input() color:String = '';
  @Input() fontSize:number = 16;

  @Input() fontWeight: string = '';
  @Input() fontFamily:string = '';

  @Input() flecha: boolean = true;


  clickListener: Function;
  showDropList: boolean;
  dropListClass: string = 'dropList';
  title: string;
  placeholder: any = 'Search';
  searchTerm: string = null;
  arrayAux: any = [];

  radioArray:boolean[];

  title1: string = 'Todos los Eventos';

  constructor(private renderer: Renderer, private elementRef: ElementRef) {
    this.clickListener = renderer.listenGlobal(
      'document',
      'click',
      (event: MouseEvent) => this.handleGlobalClick(event)
    );
  }

  ngOnInit() {
    this.showDropList = false;
    //this.title = this.placeH;
    //this.dropListClass = 'dropList';
    //this.fillArrayAux();
  }

  ngOnChanges(changes: SimpleChanges){
    //console.log(changes);
    if (changes.items != undefined){
      //console.log('entra');
      this.fillArrayAux();
    }
    if(changes.itemSelect !== undefined){
      console.log(changes.itemSelect);
      this.dropListClass = 'dropListSelect';
      if(changes.itemSelect.currentValue !== undefined && !changes.firstChange){
        this.selectItem(this.itemSelect, 0);
      }
    }
  }

  /* Escucha el evento click globalmente */
  handleGlobalClick(event: MouseEvent): void {
    const withinElement = this.elementRef.nativeElement.contains(event.target);
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeDropList();
    }
  }
  /* Cierra el drop list */
  closeDropList(): void {
    this.showDropList = false;
  }

  /* Abre el drop list */
  openDropList($event): void {
    $event.stopPropagation();
    this.showDropList = !this.showDropList;
  }

  /* Selecciona opcion del drop list */
  selectItem(item: any,title, $event?): void {
    $event !== undefined ? $event.stopPropagation() :null;
    console.log(item);
    this.title = title;

    console.log(this.title);
    console.log(this.title1);
    this.dropListClass = 'dropListSelect';
    this.valueDropList.emit(item);

    this.closeDropList();

  }

 
  fillArrayAux() {
    this.arrayAux = [];
    for (let item of this.items){
      this.arrayAux.push(item);
    }

    this.radioArray = new Array<boolean>(this.arrayAux.length).fill(false);
    console.log(this.radioArray);
    this.radioArray[4] = true;
    this.radioArray[6] = true;
  }

  ngOnDestroy() {
    this.clickListener();
  }

}
