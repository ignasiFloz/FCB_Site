import { Component, OnInit } from '@angular/core';
import { GetPlayersService } from '../../services/get-players.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{



  constructor(private playerUtils : GetPlayersService) { }
  ngOnInit(): void {
    try{
      this.playerUtils.getPlayers().subscribe(players => {
        console.log(players);
      });
    } catch(err) {
      throw new Error("Error 6969");
      
    }
  }



}
