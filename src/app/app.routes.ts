import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./pages/transactions/transactions.page').then(
        (m) => m.TransactionsPage
      ),
  },
  
{
  path: 'transaction-form',
  loadComponent: () =>
    import('./pages/transaction-form/transaction-form.page').then(
      (m) => m.TransactionFormPage
    ),
},
{
  path: 'transaction-form/:id',
  loadComponent: () =>
    import('./pages/transaction-form/transaction-form.page').then(
      (m) => m.TransactionFormPage
    ),
},


  {
    path: 'budgets',
    loadComponent: () =>
      import('./pages/budgets/budgets.page').then((m) => m.BudgetsPage),
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./pages/reports/reports.page').then((m) => m.ReportsPage),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.page').then((m) => m.SettingsPage),
  },
];
