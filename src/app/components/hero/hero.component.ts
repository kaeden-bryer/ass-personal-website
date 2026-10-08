import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [
    CommonModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  isOpen = false;

  open() {
    if (this.isOpen) {
      this.isOpen = false;
    }
    else {
      this.isOpen = true;
    }
    console.log('this.Open ', this.isOpen);
  }
}
