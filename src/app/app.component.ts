import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private Location: Location){

  }
  title = 'hackatrix';
public route=['cuento-1', 'faces', 'reflexion-1'];

  navegar(){

  }

  atras() {
    this.Location.back();
  }
}
