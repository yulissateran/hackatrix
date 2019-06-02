import { Component, OnInit, Input } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { log } from 'util';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {
  public state: any = {};
  public curretIndexQuestion: number = 0;
  public question: any = {};
  public progress: number = 0;
  constructor(private Location: Location,private stateService: StateService,  private _router: Router) {
    this.state = this.stateService.levels[0].game;
    this.question = this.state.questions[this.curretIndexQuestion];
    
  }

  ngOnInit() {
  }
  irAReflexion(){
  this._router.navigate(['/reflexion-1'])
  }
 reset(){
  this.state = this.stateService.levels[0].game;
  this.question = this.state.questions[this.curretIndexQuestion];
  this.state = {};
  this.curretIndexQuestion = 0;
  this.question = {};
  this.progress = 0;
 }

 atras() {
  this.Location.back();
}

  select(response) {
    
      if (this.question.response === response) {
        console.log(this.question.response , 'correct response:', response);    
      console.log(this.curretIndexQuestion )
        if (this.curretIndexQuestion === 2) {
          setTimeout(()=>this.irAReflexion(), 1000);
          console.log('fin');
        } else {
          this.curretIndexQuestion = this.curretIndexQuestion + 1;
          this.question = {};
          this.question = this.state.questions[this.curretIndexQuestion];
          this.progress = this.progress + 1;
        }
    }

  }

}
