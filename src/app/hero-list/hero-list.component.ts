import { Component } from '@angular/core';
import { HeroListServiceService } from '../service/hero-list-service.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss',
})
export class HeroListComponent {
  constructor(private heroListServie: HeroListServiceService) {}
  getHero(){
    console.log(this.heroListServie.getHeroes())
  }
}
