import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  @Input() player!: Player;
  
  ngOnInit(): void {
  }  
}
