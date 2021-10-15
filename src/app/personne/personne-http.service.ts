import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../model';

@Injectable({
  providedIn: 'root'
})
export class PersonneHttpService {

  private Personnes: Array<Personne> = new Array<Personne>();

  constructor(private http: HttpClient) { 
    this.load();
  }

  findAll(): Array<Personne> {
    return this.Personnes;
  }

  find(id: number): Observable<Personne> {
    return this.http.get<Personne>("http://localhost:5000/api/Personnes/"+id);
  }

  create(Personne: Personne) : void {
    this.http.post<Personne>("http://localhost:5000/api/Personnes", Personne).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  update(Personne: Personne) : void {
    this.http.put<Personne>("http://localhost:5000/api/Personnes/"+Personne.id, Personne).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  delete(id: number): void {
    this.http.delete<void>("http://localhost:5000/api/Personnes/"+id).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  private load(): void {
    this.http.get<Array<Personne>>("http://localhost:5000/api/Personnes").subscribe(response => {
      this.Personnes = response;
    }, error => console.log(error));
  }

}