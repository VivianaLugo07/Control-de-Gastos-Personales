import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
  templateUrl: './transactions.page.html'
})
export class TransactionsPage {
  transactions: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ionViewWillEnter() {
    this.transactions = this.dataService.getTransactions();
  }

  newTransaction() {
    this.router.navigate(['/transaction-form']);
  }

  edit(id: any) {
    this.router.navigate(['/transaction-form', id]);
  }

  delete(id: any) {
    this.dataService.deleteTransaction(id);
    this.transactions = this.dataService.getTransactions();
  }
}
