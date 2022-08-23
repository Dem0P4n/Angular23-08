import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent {

  public contador: number = 0;
  @Input()
  public titulo!:string
  public aumentarContador(): void{
    this.contador = this.contador + 1;
  }


}
