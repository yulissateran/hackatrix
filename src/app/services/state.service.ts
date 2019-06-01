import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }
  public levels = [{
    progres: 0,
    name: '',
    questions: [
      'pregunta uno', 'pregunta 2', 'pregunta 3'
    ],
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoZhjoNxm7xuf7yRNTUPyMo4TJd6R7AMij8cens8m-K_voI9K',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoZhjoNxm7xuf7yRNTUPyMo4TJd6R7AMij8cens8m-K_voI9K',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoZhjoNxm7xuf7yRNTUPyMo4TJd6R7AMij8cens8m-K_voI9K'],
    lectura: {
      titulo: 'lectura uno',
      texto: `texto lectura uno texto lectura unotexto lectura
       uno texto lectura uno 
       texto lectura uno texto lectura unotexto lectura uno texto lectura uno
       texto lectura uno texto lectura unotexto lectura uno texto lectura uno 
       texto lectura uno texto lectura unotexto lectura uno texto lectura uno
       texto lectura uno texto lectura unotexto lectura uno texto lectura uno`,
       
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoZhjoNxm7xuf7yRNTUPyMo4TJd6R7AMij8cens8m-K_voI9K',
      id: 1,
    },
    reflexion: {
      pregunta: '',
      texto: '',
    }
  }, {
    lectura: {
      texto: '',
      img: '',
      id: 1,
    },
    reflexion: {
      pregunta: '',
      texto: '',
    }
  }, {
    lectura: {
      texto: '',
      img: '',
      id: 1,
    },
    reflexion: {
      pregunta: '',
      texto: '',
    }
  }];
  public totalProgres: 0;

}
