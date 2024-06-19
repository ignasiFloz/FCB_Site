import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Player } from '../../models/Player';
import { GetPlayersService } from '../../services/get-players.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  playerId?: string;
  players?: Player[];

  constructor(
    private playersUtils: GetPlayersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: any) => {
        this.playerId = params.get('id');
        return this.playersUtils.getPlayers();
      })
    ).subscribe(
      (players: Player[]) => {
        this.players = players;
        console.log(players);
      },
      (error) => {
        throw new Error('Error 6969');
      }
    );
  }
}
