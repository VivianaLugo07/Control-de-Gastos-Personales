import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './transaction-form.page.html'
})
export class TransactionFormPage {
  id: string | null = null;
  description = '';
  amount = 0;
  type = 'income';
  date = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ionViewWillEnter() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      const t = this.dataService.getTransactionById(this.id);
      if (t) {
        this.description = t.description;
        this.amount = t.amount;
        this.type = t.type;
        this.date = t.date;
      }
    }
  }

  save() {
    const trx = {
      id: this.id ?? Date.now(),
      description: this.description,
      amount: this.amount,
      type: this.type,
      date: this.date
    };

    if (this.id) {
      this.dataService.updateTransaction(trx);
    } else {
      this.dataService.addTransaction(trx);
    }

    this.router.navigate(['/transactions']);
  }
}
