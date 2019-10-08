import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.css']
})
export class ListPetComponent implements OnInit {
  pets:object;
  pet:object;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router, 
    private Pet:PetService
  ) { }

  ngOnInit() {
    this.getPets()
  }

  getPets(){
    this.Pet.getPets().subscribe( data => this.pets = data )
  }

  readPet(id){
    this.Pet.readPet(id).subscribe( data => {
      this.pet = data
    })
  }

  deletePet(id){
    this.Pet.deletePet(id).subscribe( data => this.getPets())
  }

}
