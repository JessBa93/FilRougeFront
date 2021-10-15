import { Injectable } from '@angular/core';
import { Personne, Role } from '../model';

@Injectable({
  providedIn: 'root'
})
export class PersonneServiceService {

  private Personnes: Array<Personne> = new Array<Personne>();

  

  constructor() { 
    this.load();
  }

  findAll(): Array<Personne> {
    return this.Personnes;
  }

  find(id: number): Personne {
    return this.Personnes.find(m => m.id == id);
  }

  create(Personne: Personne) : void {
    let max: number = 0;

    for(let mat of this.Personnes) {
      if(max < mat.id) {
        max = mat.id;
      }
    }

    Personne.id = ++max;

    this.Personnes.push(Personne);
  }

  update(Personne: Personne) : void {
    const position: number = this.Personnes.findIndex(m => m.id == Personne.id);

    this.Personnes[position] = Personne;
  }

  delete(id: number): void {
    const position: number = this.Personnes.findIndex(m => m.id == id);
    this.Personnes.splice(position, 1);
  }


  private load(): void {
    this.Personnes.push(new Personne(1, "Christian","peducelle","christ","christ@gmail.com","1234",Role.Utilisateur));
    this.Personnes.push(new Personne(2, "Alexandre","Bruneau","alex","alex@gmail.com","0000",Role.Administrateur));
    this.Personnes.push(new Personne(3, "Jessica","Bahout","jess","jess@gmail.com","8888",Role.Utilisateur));
  }
}