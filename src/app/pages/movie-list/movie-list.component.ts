// tslint:disable:max-line-length
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  movies = [
    { id: 1, title: 'Bastardos Inglórios', obs: 'Dolore eiusmod duis sunt irure occaecat sit reprehenderit sunt aute laborum eu ipsum amet.', rating: 3, toWatchNext: true },
    { id: 2, title: 'Guardiões da Galáxia', obs: 'Dolore eiusmod duis sunt irure occaecat sit reprehenderit sunt aute laborum eu ipsum amet.', rating: 4.5, toWatchNext: false },
    { id: 3, title: 'Um Contratempo', obs: 'Dolore eiusmod duis sunt irure occaecat sit reprehenderit sunt aute laborum eu ipsum amet.', rating: 4, toWatchNext: true },
    { id: 4, title: 'Cidade de Deus', obs: 'Dolore eiusmod duis sunt irure occaecat sit reprehenderit sunt aute laborum eu ipsum amet.', rating: 4, toWatchNext: true },
    { id: 5, title: 'Corra', obs: 'Dolore eiusmod duis sunt irure occaecat sit reprehenderit sunt aute laborum eu ipsum amet.', rating: 5, toWatchNext: true },
    { id: 6, title: 'Django', obs: 'Dolore eiusmod duis sunt irure occaecat sit reprehenderit sunt aute laborum eu ipsum amet.', rating: 5, toWatchNext: false },
    { id: 7, title: 'O Resgate do Soldado Ryan', obs: 'Dolore eiusmod duis sunt irure occaecat sit reprehenderit sunt aute laborum eu ipsum amet.', rating: 5, toWatchNext: false },
    { id: 8, title: 'Pulp Fiction', obs: 'Dolore eiusmod duis sunt irure occaecat sit reprehenderit sunt aute laborum eu ipsum amet.', rating: 5, toWatchNext: false },
    { id: 9, title: 'O irlândes', obs: 'Dolore eiusmod duis sunt irure occaecat sit reprehenderit sunt aute laborum eu ipsum amet.', rating: 5, toWatchNext: true },
    { id: 10, title: 'Os suspeitos', obs: 'Dolore eiusmod duis sunt irure occaecat sit reprehenderit sunt aute laborum eu ipsum amet.', rating: 5, toWatchNext: false },
    { id: 11, title: 'John Wick', obs: 'Dolore eiusmod duis sunt irure occaecat sit reprehenderit sunt aute laborum eu ipsum amet.', rating: 5, toWatchNext: true },
    { id: 12, title: 'Parasita', obs: 'Dolore eiusmod duis sunt irure occaecat sit reprehenderit sunt aute laborum eu ipsum amet.', rating: 5, toWatchNext: true },
  ];

  ngOnInit() {
  }

}
