import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SearchResponse } from '../models/quote.model';

@Injectable({
    providedIn: 'root'
  })

export class QuoteService{
    // set up the api url
    private readonly API_URL = 'https://api.quotable.io/search/quotes';

    constructor(private http: HttpClient) {};

    searchQuotes(searchTerm: string): Observable<SearchResponse>{
        // set up the params we will be adding to the api call. 
        const params = new HttpParams().set('query', searchTerm);

        // return the response from 
        return this.http.get<SearchResponse>(this.API_URL, { params })
        .pipe(
            // if there is an error, send an empty object to the client
        catchError(this.handleError<SearchResponse>('searchQuotes', {} as SearchResponse))
        );
    }

    private handleError<T>(operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.error(`${operation} failed: ${error.message}`);
            return of(result as T);
        }
    }

}