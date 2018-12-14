import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  submitted: boolean = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  newCustomer() {
    this.customer = new Customer();
    this.submitted = false;
  }

  save() {
    this.customerService.createCustomer(this.customer)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
    this.customer = new Customer();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
