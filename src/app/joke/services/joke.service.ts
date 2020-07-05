import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, delay, map, publishReplay, refCount } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class JokeService {
    httpOptions = {
        headers: new HttpHeaders({
            'x-rapidapi-host': 'joke3.p.rapidapi.com',
            'x-rapidapi-key': 'be2b3e0d7cmshb5ad01829f9e0aep13bff7jsn4511e33d557e'
        })
    };
    constructor(private http: HttpClient) { }

    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }

    getRandomJoke() {
        const theApi = 'https://joke3.p.rapidapi.com/v1/joke';
        return this.http.get(theApi, this.httpOptions).pipe(catchError(this.handleError));
    }
}