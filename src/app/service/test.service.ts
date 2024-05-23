
import { LogService } from './log.service';
import { HeroListServiceService } from './hero-list-service.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TestService extends LogService{

  constructor(private heroListService:HeroListServiceService) { super()}
  override log(){
    console.log('test.serssssvice.ts')
    console.log(this.heroListService.getHeroes())
  }
}
