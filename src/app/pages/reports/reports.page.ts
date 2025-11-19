import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss']
})
export class ReportsPage {

  constructor() {}

}
