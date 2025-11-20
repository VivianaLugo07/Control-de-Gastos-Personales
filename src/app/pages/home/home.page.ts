import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
  templateUrl: './home.page.html',
})
export class HomePage {
  totalIncome = 0;
  totalExpense = 0;

  constructor(private dataService: DataService) {}

  ionViewWillEnter() {
    const transactions = this.dataService.getTransactions();

    this.totalIncome = transactions
      ?.filter((t: any) => t?.type === 'ingreso')
      ?.reduce((sum: number, t: any) => sum + Number(t.amount || 0), 0);

    this.totalExpense = transactions
      ?.filter((t: any) => t?.type === 'gasto')
      ?.reduce((sum: number, t: any) => sum + Number(t.amount || 0), 0);
  }
}
