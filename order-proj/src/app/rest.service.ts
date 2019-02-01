import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})

 
export class RestService {
  endpoint = 'http://foodie.aqarmap.net/api/orders/115';
httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json',

    
    
   })
 };
  constructor(private http: HttpClient) { 


  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getOrders(): Observable<any> {
    return this.http.get(this.endpoint + '').pipe(
      map(this.extractData));
  }
  


  
  updateorder (id, order): Observable<any> {
    return this.http.post<any>(this.endpoint + '/items/' + id+'?user_id=2', JSON.stringify(order), this.httpOptions).pipe(
      tap((product) => console.log(`added order w/ id=${id}`)),
      catchError(error))
  
  }
  deleteOrder (id): Observable<any> {
    return this.http.delete<any>(this.endpoint + '/items/' + id+'?user_id=2', this.httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(error)
    );
  }
  

}
