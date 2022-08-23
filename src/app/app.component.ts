import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nombre: string = 'Julio';
  public contador: number = 0;
  public scroll: number = 0;
  public imagen: string = "https://i.pinimg.com/originals/0d/8d/7d/0d8d7d79f2763507e77827a58386185a.jpg"
  public alto: number = 300;
  public ancho: number = 300;
  public mostrar:boolean = true;
  public color: string = "";
  public sumar(n1: number, n2: number): number {
    return n1 + n2;
  }
  public eventoBoton(event: Event): void {
    console.log(event);
    alert('Hola');
  }
  public aumentarContador(): void {
    this.contador = this.contador + 1;
  }
  public scrollEn(event: Event): void {
    this.scroll = (event.target as Element).scrollTop;
  }

  public capturarAlto(event: Event): void{
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this.alto = valor;
  }

  public capturarAncho(event: Event): void{
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this. ancho= valor;
  }

  public capturarColor(event: Event): void{
    const color = (event.target as HTMLInputElement).value

    this.color = color;
  }


}
