import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Canal } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CanalHttpService {

  private Canals: Array<Canal> = new Array<Canal>();

  constructor(private http: HttpClient) { 
    this.load();
  }

  findAll(): Array<Canal> {
    return this.Canals;
  }

  find(id: number): Observable<Canal> {
    return this.http.get<Canal>("http://localhost:5000/api/Canaux/"+id);
  }

  create(Canal: Canal) : void {
    this.http.post<Canal>("http://localhost:5000/api/Canaux", Canal).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  update(Canal: Canal) : void {
    this.http.put<Canal>("http://localhost:5000/api/Canaux/"+Canal.id, Canal).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  delete(id: number): void {
    this.http.delete<void>("http://localhost:5000/api/Canaux/"+id).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  private load(): void {
    this.http.get<Array<Canal>>("http://localhost:5000/api/Canaux").subscribe(response => {
      this.Canals = response;
    }, error => console.log(error));
  }

}