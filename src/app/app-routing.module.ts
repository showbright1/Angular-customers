import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

const routes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full'},
  {path: 'customer', component: CustomersListComponent},
  {path: 'add', component: CreateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
