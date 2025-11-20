import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private STORAGE_KEY = 'transactions';

  constructor() {}

  // Obtener todas las transacciones
  getTransactions() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  // Guardar lista completa
  saveTransactions(list: any[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
  }

  // Obtener por ID
  getTransactionById(id: any) {
    const list = this.getTransactions();
    return list.find((t: any) => String(t.id) === String(id));
  }

  // Agregar
  addTransaction(trx: any) {
    const list = this.getTransactions();

    if (!trx.id) {
      trx.id = uuidv4();
    }

    list.push(trx);
    this.saveTransactions(list);
  }

  // Actualizar
  updateTransaction(trx: any) {
    const list = this.getTransactions();
    const index = list.findIndex((t: any) => t.id === trx.id);

    if (index > -1) {
      list[index] = trx;
      this.saveTransactions(list);
    }
  }

  // Eliminar
  deleteTransaction(id: any) {
    let list = this.getTransactions();
    list = list.filter((t: any) => String(t.id) !== String(id));
    this.saveTransactions(list);
  }
}
