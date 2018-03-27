import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './moc-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Heroservice: fetched heroes');
    return of(HEROES);
  }
}
