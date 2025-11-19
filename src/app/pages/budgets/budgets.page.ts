import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budgets',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './budgets.page.html',
  styleUrls: ['./budgets.page.scss']
})
export class BudgetsPage {

  constructor() {}

}
