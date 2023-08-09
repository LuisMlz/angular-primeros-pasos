import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public name: string = 'batman';
  public age: number = 40;

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = 'Nightwing'
  }

  changeAge():void{
    this.age = 30
  }

  resetForm(){
    this.name = 'batman';
    this.age = 40;
  }

}
