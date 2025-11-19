import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage {

  darkMode = false;

  constructor() {}

  toggleDark() {
    document.body.classList.toggle('dark', this.darkMode);
  }

}
