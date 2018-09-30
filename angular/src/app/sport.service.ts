import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';

import { Sport } from './sport';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Day } from './day';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private httpClient: HttpClient) { }

  getSports()
  {
    return this.httpClient.get<Sport[]>(environment.sportsUrl)
    .pipe(catchError(this.handleError('getSports', [])));
  }

  getSport(name: String): Observable<Sport>
  {
    const url = `${environment.sportsUrl}/${name}`;
    return this.httpClient.get<Sport>(url).pipe(
      catchError(this.handleError<Sport>(`getSport id=${name}`))
    );
  }

  getAvailableDays(sportName: String) : Observable<Day[]>
  {
    let numberOfDays = document.querySelector('input').value;
    var numberOfDaysNumber = +numberOfDays;
    this.checkInputNumberOfDays(numberOfDaysNumber);
    const url = 'http://localhost:8080/days?name='+sportName+'&numberOfDays='+numberOfDays;
    return this.httpClient.get<Day[]>(url);
  }

  private handleError<T> (operation = 'operation', result?: T)
  {
    return (error: any): Observable<T> => {
      console.error(error);
      alert('An error occured !');
      return of(result as T);
    }
  }

  private checkInputNumberOfDays(numberOfDaysNumber: number) 
  {
    if (numberOfDaysNumber > 5 || numberOfDaysNumber < 1) 
    {
      alert("Please, enter a number of days between 1 and 5");
    }
  }
}
