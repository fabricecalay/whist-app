import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

import { Player } from './player';
import { PLAYERS } from './mock-players';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'},
    )
};

@Injectable()
export class PlayerService {

  private playersUrl = environment.apiUrl + '/players';

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

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.playersUrl}`, player, httpOptions)
          .pipe(
              tap( (player:Player) => this.log(`player ${player.id} created`)),
              catchError(this.handleError<Player>(`addPlayer`))
          );
  }

  deletePlayer(player: Player): Observable<Player> {
    return this.http.delete<Player>(`${this.playersUrl}/${player.id}`, httpOptions)
          .pipe(
              tap( (player:Player) => this.log(`player deleted`)),
              catchError(this.handleError<Player>(`deletePlayer`))
          );
  }

  /* GET players whose name contains search term */
  searchPlayers(term: string): Observable<Player[]> {
    if (!term.trim()) {
      // if not search term, return empty player array.
      return of([]);
    }
    return this.http.get<Player[]>(`${this.playersUrl}?name=${term}`).pipe(
      tap(_ => this.log(`found players matching "${term}"`)),
      catchError(this.handleError<Player[]>('searchPlayers', []))
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
