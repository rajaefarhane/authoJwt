import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-creat-customer',
  templateUrl: './creat-customer.component.html',
  styleUrls: ['./creat-customer.component.css']
})
export class CreatCustomerComponent implements OnInit {
  // crée la variable bol pour cacher une boutton 
  isEdit = false;
  //crée l'objet qui contient les value des input
 customerForm = new FormGroup({
    address: new FormControl(''),
    userName: new FormControl(''),
    country: new FormControl(''),
    city:new FormControl(''),
    firstName: new FormControl(''),
    email: new FormControl(''),
    postalcode: new FormControl(''),
    lastName: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }
  Onsubmit(){
    console.log(this.customerForm.value);
  }

}

