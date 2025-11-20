import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
  templateUrl: './home.page.html',
})
export class HomePage {

  totalIncome: number = 0;
  totalExpense: number = 0;

  constructor(private data: DataService) {}

  ionViewWillEnter() {

    const transactions: Transaction[] = this.data.getTransactions();

    this.totalIncome = transactions
      .filter((t: Transaction) => t.type === 'income')
      .reduce((a: number, b: Transaction) => a + Number(b.amount), 0);

    this.totalExpense = transactions
      .filter((t: Transaction) => t.type === 'expense')
      .reduce((a: number, b: Transaction) => a + Number(b.amount), 0);

  }
}
