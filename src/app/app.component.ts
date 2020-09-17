import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  correct = false;
  title = 'typing';
  randomText = lorem.sentence();
  enteredText = '';

  checkLetter(enteredChar: string, randomChar: string) {
    console.log('enteredChar: ', enteredChar, '. randomChar: ', randomChar);
    if (enteredChar === undefined) {
      return 'notEntered';
    } else if (enteredChar === randomChar) {
      return 'correct';
    } else {
      return 'incorrect';
    }
  }

  onChangeText(value: string) {
    this.enteredText = value;
  }
}
