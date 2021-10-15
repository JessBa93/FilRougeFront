import { Component, OnInit } from '@angular/core';
import { Personne, Role } from '../model';
import { PersonneHttpService } from './personne-http.service';
import { PersonneServiceService } from './personne-service.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.scss']
})
export class PersonneComponent implements OnInit {

  personneForm: Personne = null;
  public roles = Object.values(Role);

  constructor(private PersonneService: PersonneHttpService) {
  }

  ngOnInit(): void {
  }

  list(): Array<Personne> {
    return this.PersonneService.findAll();
  }

  add(): void {
    this.personneForm = new Personne();
    
  }

  edit(id: number): void {
    this.PersonneService.find(id).subscribe(response => {
      this.personneForm = response;
    }, error => console.log(error));
  }

  remove(id: number): void {
    this.PersonneService.delete(id);
  }



  save(): void {
    if (this.personneForm.id) {
      this.PersonneService.update(this.personneForm);
    } else {

      this.PersonneService.create(this.personneForm);
    }
    this.cancel();
  }

  cancel(): void {
    this.personneForm = null;
  }
}
