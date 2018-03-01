import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Player } from './player';
import { PLAYERS } from './mock-players';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PlayerService {

  private playersUrl = 'http://localhost:9100/api/players';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl)
      .pipe(
          tap(players => this.log(`fetched players from server`)),
          catchError(this.handleError('getPlayers', []))
      );
    //return of(PLAYERS);
  }

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.playersUrl}/${id}`)
      .pipe(
          tap(_ => this.log(`fetched player id = ${id} from server`)),
          catchError(this.handleError<Player>(`getPlayer id=${id}`))
      );
    //return of(PLAYERS.find(player => player.id === id));
  }

  updatePlayer(player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.playersUrl}/${player.id}`, player, httpOptions)
          .pipe(
              tap(_ => this.log(`player id ${player.id} updated`)),
              catchError(this.handleError<Player>(`updatePlayer id=${player.id}`))
          );
  }

  /** Log a PlayerService message with the MessageService */
  private log(message: string) {
    this.messageService.add('PlayerService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
