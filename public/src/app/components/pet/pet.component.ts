import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet:object;
  id:string;
  name:string;
  type:string;
  description:string;
  skill1:string;
  skill2:string;
  skill3:string;
  likes:number;
  errors:object[];
  isLiked:boolean;
   
  constructor(
    private _route: ActivatedRoute,
    private _router: Router, 
    private Pet:PetService
    ) {
    this.isLiked = false;
    this._route.params.subscribe( params => {
      this.id = params.id;
      this.readPet();
    });
  }

  ngOnInit() {
  }

  readPet(){
    this.Pet.readPet(this.id).subscribe( data => {
      this.name = data[0]['name']
      this.type = data[0]['type']
      this.description = data[0]['description']
      this.skill1 = data[0]['skill1']
      this.skill2 = data[0]['skill2']
      this.skill3 = data[0]['skill3']
      this.likes = data[0]['likes']
    })
  }

    likePet(){
      this.Pet.likePet(this.id).subscribe( data => {
        if (data['errors']) {
          this.errors = data['errors'];
        } else {
          this.readPet()
          this.errors = [];
          this.isLiked = !this.isLiked;
        }
      })
    }

    deletePet(){
      this.Pet.deletePet(this.id).subscribe( data => this._router.navigate(['pets']))
    }

}
