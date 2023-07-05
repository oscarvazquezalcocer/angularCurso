import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //esta etiqueta se genera para cargarla en el index.html principal
  templateUrl: './app.component.html', //esto carga la etiqueta app-root
  styleUrls: ['./app.component.scss'] // aqui puede estar el codigo directo CSS pero 
  //en este caso cargamos los estilos en el documento app.component.scss
})

//creamos la clase AppComponen
export class AppComponent {
  title:string="titulo"
  public imprimir(cad:string):void{
    console.log("Esta es una funcion: ", cad);
  }

  private getmin(a:number, b:number):number {
    return Math.min(a,b);  
  }

  public get getTitle():string{
    console.log("si")
    return this.title;

  }
}