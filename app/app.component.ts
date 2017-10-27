import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Dan's Setup Template </h1>
  </div>
  <div class="container">
  <h1>Animal Info Tracker</h1>
  <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
  <hr>
  <edit-animal [childSelectedKeAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
  <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
</div>
  `
})

export class AppComponent {
  selectedAnimal = null;
 masterAnimalList: Animal[] = [
   new Animal('PBR', 'Pabst', 3.5, 4.74),
   new Animal('Moose Drool', 'Big Sky Brewing', 5, 5.3),
   new Animal('Higher Math', 'Dogfish Head Craft Brewed Ales', 11, 17)
 ];

 editAnimal(clickedAnimal) {
   this.selectedAnimal = clickedAnimal;
 }

 finishedEditing() {
   this.selectedAnimal = null;
 }

 addAnimal(newAnimalFromChild: Animal) {
   this.masterAnimalList.push(newAnimalFromChild);
 }
}
