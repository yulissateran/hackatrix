import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-game',
  templateUrl: './init-game.component.html',
  styleUrls: ['./init-game.component.scss']
})
export class InitGameComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  navegar(idNivel){
    this._router.navigate(['/linea-de-juego']);
  }
}
