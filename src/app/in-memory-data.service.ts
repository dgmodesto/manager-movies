// tslint:disable:max-line-length
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
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
    return { movies };
  }
}


/*
// for requests to an `api` base URL that gets heroes from a 'heroes' collection
  GET api/heroes          // all heroes
  GET api/heroes/42       // the hero with id=42
  GET api/heroes?name=^j  // 'j' is a regex; returns heroes whose name starting with 'j' or 'J'
  GET api/heroes.json/42  // ignores the ".json"

*/
