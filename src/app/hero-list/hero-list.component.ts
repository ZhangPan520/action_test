import { Component } from '@angular/core';
import { LogService } from '../service/log.service';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss',
})
export class HeroListComponent {
  constructor(private logService: LogService) {}
  getHero(){
    this.logService.log()
  }
}
