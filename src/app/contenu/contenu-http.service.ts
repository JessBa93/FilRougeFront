import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contenu } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ContenuHttpService {
  private Contenus: Array<Contenu> = new Array<Contenu>();
  


  constructor(private http: HttpClient) { 
    this.load();
  }

  findAll(): Array<Contenu> {
    return this.Contenus;
  }



  find(id: number): Observable<Contenu> {
    return this.http.get<Contenu>("http://localhost:5000/api/Contenus/"+id);
  }

  create(Contenu: Contenu) : void {
    this.http.post<Contenu>("http://localhost:5000/api/Contenus", Contenu).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  update(Contenu: Contenu) : void {
    this.http.put<Contenu>("http://localhost:5000/api/Contenus/"+Contenu.id, Contenu).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  delete(id: number): void {
    this.http.delete<void>("http://localhost:5000/api/Contenus/"+id).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  private load(): void {
    this.http.get<Array<Contenu>>("http://localhost:5000/api/Contenus").subscribe(response => {
      this.Contenus = response;
    }, error => console.log(error));
  }

}