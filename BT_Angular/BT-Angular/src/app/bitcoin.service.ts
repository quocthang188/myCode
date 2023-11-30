import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { BitcoinData } from './bitcoinItem'; // Replace 'your-interfaces' with the actual file name

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  private apiUrl = '/bitcoin'; // Replace 'YOUR_API_URL' with the actual API endpoint

  constructor(private http: HttpClient) {}

  getBitcoinData(): Observable<BitcoinData> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<any>(this.apiUrl, { headers }).pipe(
      map(res => res as BitcoinData),
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => new Error(error.message || 'Server error'));
  }
}
