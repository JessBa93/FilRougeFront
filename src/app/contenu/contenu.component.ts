import { Component, OnInit } from '@angular/core';
import { CanalHttpService } from '../canal/canal-http.service';
import { Canal, Contenu } from '../model';
import { ContenuHttpService } from './contenu-http.service';

@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.scss']
})
export class ContenuComponent implements OnInit {

  ContenuForm: Contenu = null;
  CanalForm: Canal=null;

  constructor(private ContenuService: ContenuHttpService, private CanalService: CanalHttpService) {
  }

  ngOnInit(): void {
  }

  listCanal(): Array<Canal> {
    return this.CanalService.findAll();
  }

  listContenu(): Array<Contenu> {
    return this.CanalForm.contenus;
  }
  
  list(): Array<Contenu> {
    return this.ContenuService.findAll();
  }

  remove(id: number): void {
    this.ContenuService.delete(id);
  }

  save(): void {
    if (this.ContenuForm.id) {
      this.ContenuService.update(this.ContenuForm);
    } else {

      this.ContenuService.create(this.ContenuForm);
    }
  }

  saveCanal(canal: Canal) {

    console.log(canal);

    canal.contenus.forEach(c => {

      this.ContenuService.update(c);

    })

    this.CanalService.update(canal);

  }
  
  removeCanal(id: number) {

    this.CanalService.delete(id);

  }
}
