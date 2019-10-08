import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';
import { ListPetComponent } from './components/list-pet/list-pet.component';
import { PetComponent } from './components/pet/pet.component';

const routes: Routes = [
  { path: '', component: ListPetComponent },
  { path: 'pets', component: ListPetComponent },
  { path: 'pets/add', component: AddPetComponent },
  { path: 'pets/edit/:id', component: EditPetComponent },
  { path: 'pets/:id', component: PetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
