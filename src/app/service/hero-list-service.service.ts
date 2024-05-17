import { Injectable } from "@angular/core";

@Injectable({
  providedIn:"root"
})
export class HeroListServiceService{
  getHeroes(){
    return [{name:"zhang"},{name:"pan"}]
  }
}
