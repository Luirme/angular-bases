import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
      public nick:string='Ironman';
      public nameReal:string='Tony Stark'
      public age:number=45;

      //LOS GET SON COMO SI FUERAN PROPIEDADES
      get capitalizeName():string{
        return this.nameReal.toUpperCase();
      }


      getHeroDescription():string{
        return `${this.nameReal} - ${this.age} años`
      }
      changeNameNick(value:string,value2:string):void{
           this.nick=value;
           this.nameReal=value2;
      }

      changeAge(value:number):void{
        this.age=value;

      }
      resetForm():void{
        this.nick='Ironman';
        this.nameReal='Tony Stark';
        this.age=45;

      /*  document.querySelectorAll('h1')!.forEach(element=>{
          '<h1>Desde Angular</h1>';

      })*/
    }

}
