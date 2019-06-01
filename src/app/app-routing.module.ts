import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaceComponent } from './components/juegos/face/face.component';
import { LecturaComponent } from './components/lectura/lectura.component';
import { ReflexionComponent } from './components/reflexion/reflexion.component';
import { InitGameComponent } from './components/presentación/init-game/init-game.component';
import { GameLineComponent } from './components/presentación/game-line/game-line.component';

const routes: Routes = [
  {
    path: 'linea-de-juego',
    component: GameLineComponent
  },
  {
    path: 'cuento-1',
    pathMatch: 'full',
    component: LecturaComponent
},
{
    path: 'faces',
    pathMatch: 'full',
    component: FaceComponent
},
{
  path: 'reflexion-1',
  pathMatch: 'full',
  component: ReflexionComponent
},
{
  path: '',
  // pathMatch: 'full',
  component: InitGameComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }