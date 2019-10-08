import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private _http: HttpClient) { }

  getPets(){
    return this._http.get('/pet');
  }
  createPet(pet){
    return this._http.post(`/pet`, pet);
  }
  readPet(id){
    return this._http.get(`/pet/${id}`);
  }
  updatePet(id, pet){
    return this._http.put(`/pet/${id}`, pet)
  }
  likePet(id){
    return this._http.get(`/pet/like/${id}`)
  }
  deletePet(id){
    return this._http.delete(`/pet/${id}`)
  }

}
