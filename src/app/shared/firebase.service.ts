import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
  
})
export class FirebaseService {

  constructor(public angularDb:AngularFireDatabase,) { }
  CreateFunctionLity(Payload : any){
   const dbRef = this.angularDb.list('/Customers')
   dbRef.push(Payload).then(res=>{
     Payload.id = res.key
     this.angularDb.object('/Customers/'+'${Payload.id}').update(Payload)
   })
  }
  ReadFunctionaLity(){
    return this.angularDb.list('/Customers').valueChanges()
  }
  UpdateFunctionLity(){}
  DeleteFunctionLity(){}
}
