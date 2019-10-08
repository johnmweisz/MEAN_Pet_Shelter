import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  id:string;
  name:string;
  type:string;
  description:string;
  skill1:string;
  skill2:string;
  skill3:string;
  errors:object[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router, 
    private Pet:PetService
  ) { }

  ngOnInit() {
    this._route.params.subscribe( params => {
      this.id = params.id;
      this.Pet.readPet(this.id).subscribe( data => {
        if (data['errors']) {
          this.errors = data['errors'];
        } else {
          this.name = data[0]['name']
          this.type = data[0]['type']
          this.description = data[0]['description']
          this.skill1 = data[0]['skill1']
          this.skill2 = data[0]['skill2']
          this.skill3 = data[0]['skill3']
        }
      });
    });
  }

  updatePet(){
    const update_Pet = {
      name: this.name,
      type: this.type,
      description: this.description,
      skill1: this.skill1,
      skill2: this.skill2,
      skill3: this.skill3
    }
    this.Pet.updatePet(this.id, update_Pet).subscribe( data => {
      if (data['errors']) {
        this.errors = data['errors'];
      } else {
        this.errors = [];
        this._router.navigate(['pets', this.id]);
      }
    })
  }
}
