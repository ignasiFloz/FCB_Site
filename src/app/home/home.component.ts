import { Component, OnInit } from '@angular/core';
import { GetPlayersService } from '../../services/get-players.service';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{ 
  players: Player[] = [];



  constructor(private playerUtils : GetPlayersService) { }
  ngOnInit(): void {
    try{

      this.playerUtils.getPlayers().subscribe((players: Player[])  => {
        this.players = players
      });
    } catch(err) {
      throw new Error("Error 6969");
      
    }
  }
  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
