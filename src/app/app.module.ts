import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LecturaComponent } from './components/lectura/lectura.component';
import { ReflexionComponent } from './components/reflexion/reflexion.component';
import { FaceComponent } from './components/juegos/face/face.component';
import { DropComponent } from './components/juegos/drop/drop.component';
import { RolesComponent } from './components/juegos/roles/roles.component';
import { InitGameComponent } from './components/presentación/init-game/init-game.component';

@NgModule({
  declarations: [
    AppComponent,
    LecturaComponent,
    ReflexionComponent,
    FaceComponent,
    DropComponent,
    RolesComponent,
    InitGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
