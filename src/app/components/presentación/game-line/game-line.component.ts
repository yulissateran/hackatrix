import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-game-line',
  templateUrl: './game-line.component.html',
  styleUrls: ['./game-line.component.css']
})
export class GameLineComponent implements OnInit {

  constructor(private _activeRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }


  navegar(idNivel){
    this._router.navigate(['/cuento' + idNivel]);
  }

}
