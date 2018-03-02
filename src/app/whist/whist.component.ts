import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-whist',
  templateUrl: './whist.component.html',
  styleUrls: ['./whist.component.css']
})
export class WhistComponent implements OnInit {

  players: Player[];

/*
  playerFive: Player = {
    id: 5,
    name: 'Fab'
  };
*/

  //selectedPlayer: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
    //this.players.push(this.playerFive);
  }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players);

  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.playerService.addPlayer({ name } as Player)
      .subscribe(player => {
        this.players.push(player);
      });
  }

  delete(player: Player) : void {
    this.players = this.players.filter(h => h !== player);
    this.playerService.deletePlayer(player).subscribe();
  }

/*
  onSelect(player : Player) : void {
    this.selectedPlayer = player;
  }
*/


}
