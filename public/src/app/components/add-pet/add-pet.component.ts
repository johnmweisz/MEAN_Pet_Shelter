import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
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
  }

  createPet(){
    const new_Pet = {
      name: this.name,
      type: this.type,
      description: this.description,
      skill1: this.skill1,
      skill2: this.skill2,
      skill3: this.skill3
    }
    
    this.Pet.createPet(new_Pet).subscribe( data => {
      console.log(data)
      if (data['errors']) {
        this.errors = data['errors'];
      } else {
        this.errors = [];
      this._router.navigate(['pets']);
    }
    })
  }

}
