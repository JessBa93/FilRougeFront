import { Component, OnInit } from '@angular/core';
import { Canal } from '../model';
import { CanalHttpService } from './canal-http.service';

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.scss']
})
export class CanalComponent implements OnInit {


  canalForm: Canal = null;

  constructor(private CanalService: CanalHttpService) {
  }

  ngOnInit(): void {
  }

  list(): Array<Canal> {
    return this.CanalService.findAll();
  }

  add(): void {
    this.canalForm = new Canal();

  }


  edit(id: number): void {
    this.CanalService.find(id).subscribe(response => {
      this.canalForm = response;
    }, error => console.log(error));
  }


  remove(id: number): void {
    this.CanalService.delete(id);
  }



  save(): void {
    if (this.canalForm.id) {
      this.CanalService.update(this.canalForm);
    } else {

      this.CanalService.create(this.canalForm);
    }
    this.cancel();
  }

  cancel(): void {
    this.canalForm = null;
  }
}