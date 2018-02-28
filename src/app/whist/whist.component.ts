import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-whist',
  templateUrl: './whist.component.html',
  styleUrls: ['./whist.component.css']
})
export class WhistComponent implements OnInit {

  playerOne: Player = {
    id: 1,
    name: 'Fab'
  };

  constructor() { }

  ngOnInit() {
  }


}
