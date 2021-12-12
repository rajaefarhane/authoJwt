import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatCustomerComponent } from './creat-customer/creat-customer.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';

const routes: Routes = [
 {path:'',redirectTo:'liste-students',pathMatch:'full'},
  { path:'liste-students', component:CustomerTableComponent },
  { path:'creat-students', component:CreatCustomerComponent },
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

