import { Injectable } from '@angular/core';
import {ITopCrime} from './crimes/crimes.top.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopCrimesDataService {

  private topCrimesUrl = 'NflArrest.com/api/v1/crime';

  constructor(private http: HttpClient) { }

  getTopCrimes() : Observable<ITopCrime[]> {
    return this.http.get<ITopCrime[]>(this.topCrimesUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data)),
      catchError(this.handleError)
      )
    );
  }

  private handleError(err: HttpErrorResponse) { 
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      // client side error or network error
      errorMessage = 'An error occured: ${err.status}, error message is: ${err.message}';
    } else {
      errorMessage = 'Server returned code:  ${err.status}, error message is: ${err.messsage}'; 
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
