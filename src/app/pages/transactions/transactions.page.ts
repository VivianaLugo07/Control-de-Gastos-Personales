import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})
export class TransactionsPage {
  transactions: any[] = [];

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.transactions = this.dataService.getTransactions();
  }

  // 🔥 Este método faltaba
  newTransaction() {
    this.router.navigate(['/transaction-form']);
  }

  edit(id: string) {
  // Navega a la página de formulario pasando el id
  this.router.navigate(['/transaction-form', id]);
}


  delete(id: number) {
    this.dataService.deleteTransaction(id);
    this.transactions = this.dataService.getTransactions();
  }
  
}
