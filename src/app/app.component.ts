import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ninja Gold';
  gold: number = 0;
  log = [];


  addGold(building: String) {
    if(building === "farm"){
      let random = Math.floor((Math.random() * 4) + 2);
      this.gold += random;
      let buildingLog = `You earned ${random} gold at the ${building}!`;
      this.log.push(buildingLog);
    }
    if(building === "cave"){
      let random = Math.floor((Math.random() * 9) + 5);
      this.gold += random;
      let buildingLog = `You earned ${random} gold at the ${building}!`;
      this.log.push(buildingLog);
    }
    if(building === "house"){
      let random = Math.floor((Math.random() * 14) + 7);
      this.gold += random;
      let buildingLog = `You earned ${random} gold at the ${building}!`;
      this.log.push(buildingLog);
    }
    if(building === "casino"){
      let random = Math.floor((Math.random() * 200) - 100);
      this.gold += random;
      let buildingLog
      if(random > 0){
        buildingLog = `You earned ${random} gold at the ${building}!`;
      }
      else {
        buildingLog = `You lost ${random} gold at the ${building}!`;
      }
      this.log.push(buildingLog);
    }
    
  }


}
