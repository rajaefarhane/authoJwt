import { Component, OnInit } from '@angular/core';
import{FirebaseService} from '../shared/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  Headers = ['S.No','userName','lastName','email','city','address','country','postal code']

  constructor(public FirebaseService: FirebaseService,    private router: Router) { }
  tableData : any;
  
 
  ngOnInit(): void {
this.getAllCustomers()

  }
  CreatCustomerForm(){
 }
 getAllCustomers(){
  this.FirebaseService.ReadFunctionaLity().subscribe(res =>{
      //console.log(res)
      this.tableData=res
    })

 }
 UpdateCustomers(){
   //alert("bonjour")
  const ref =  this.router.navigate(['/creat-students']);

 }

}