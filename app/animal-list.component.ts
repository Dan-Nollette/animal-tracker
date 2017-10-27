import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'animal-list',
  template:`
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList"> {{currentAnimal.name}}
      <br>
      <ul>
        <li>Species: {{currentAnimal.species}}</li>
        <li>Age: {{currentAnimal.age}}</li>
        <li>Diet: {{currentAnimal.diet}}</li>
        <li>Location: {{currentAnimal.location}}</li>
        <li>Caretakers: {{currentAnimal.caretakers}}</li>
        <li>Sex: {{currentAnimal.sex}}</li>
        <li>Likes: {{currentAnimal.likes}}</li>
        <li>Dislikes: {{currentAnimal.dislikes}}</li>
      </ul>
      <button (click)="editAnimal(currentAnimal)">Edit Animal</button>
      <br><br>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

   editAnimal(AnimalToEdit: Animal) {
     this.clickSender.emit(AnimalToEdit);
   }
}
