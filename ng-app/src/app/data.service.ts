import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators/'; 
import { Item } from './item';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor( private http: HttpClient) { }
  
  gettodoItems(){
    return this.http.get<Item[]>('http://localhost:3000/items')
    .pipe(map(res => res));
  }

  addtodoItem(newItem){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');

    return this.http.post('http://localhost:3000/item', newItem, {headers : headers})
    .pipe(map(res => res));


  }
  updatetodoItem(newItem){
    let headers = new HttpHeaders();

    headers.append('Content-Type','application/json');

    return this.http.put('http://localhost:3000/item/'+newItem._id, newItem, {headers: headers})
    .pipe(map(res => res));

  }
  deletetodoItem(id){
    return this.http.delete('http://localhost:3000/item/'+id)
    .pipe(map(res => res));
  }
}
