import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {

  menuOpened = false;


  listTitles = [
    {
      name: 'Guardiões da Galaxia',
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg', 
      relevance: 98,
      age: 12,
      parts: 2,
      categories: [
      'Filme de fantasia',
      'Viagem no espaço'
      ]
    },
    {
      name: 'Guardiões da Galaxia2',
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg', 
      relevance: 93,
      age: 0,
      parts: 1,
      categories: [
      'Épico',
      'Filme de fantasia'
      ]
    },
    {
      name: 'Guardiões da Galaxia3',
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg', 
      relevance: 94,
      age: 18,
      parts: 3,
      categories: [
      'Sexo explícito',
      'Viagem no espaço'
      ]
    },
    {
      name: 'Guardiões da Galaxia4',
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg', 
      relevance: 91,
      age: 14,
      parts: 1,
      categories: [
      'Filme de fantasia',
      'Viagem no espaço',
      'Putaria braba'
      ]
    },  
  ];
  
  setMenuState(state: boolean){
    this.menuOpened = state;
  }

  closeMenu(){
    this.setMenuState(false);
    this.menuOpened = false;
  }
}
