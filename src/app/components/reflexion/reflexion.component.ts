import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-reflexion',
  templateUrl: './reflexion.component.html',
  styleUrls: ['./reflexion.component.css']
})
export class ReflexionComponent implements OnInit {
  public state : any;
    constructor( private _activeRoute: ActivatedRoute,
      private _router: Router, private stateService: StateService) { 
  console.log(this._activeRoute.snapshot)
  const route = this._activeRoute.snapshot.routeConfig.path; 
  this.state = this.getData(route);
  console.log(this.state);
  }
  
    ngOnInit() {
    }
  
    getData(route){
      switch(route){
        case 'reflexion-1':
        return this.stateService.levels[0].reflexion;
        case 'reflexion-2':
            return this.stateService.levels[1].reflexion;
        case 'reflexion-3':
            return this.stateService.levels[2].reflexion;
      }
    }
  

}
