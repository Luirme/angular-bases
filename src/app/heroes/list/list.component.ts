import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
      public heroNames: string[]=['Spiderman','Ironman','Deadpool','Hulk','Thor'];
      public deleterHero?:string;
      removeLastHero():void{
       this.deleterHero= this.heroNames.pop();
      }
}
