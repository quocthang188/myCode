import { Component } from '@angular/core';
import { DongABankService } from '../dong-abank-service.service';

@Component({
  selector: 'app-dong-abank-component',
  templateUrl: './dong-abank-component.component.html',
  styleUrls: ['./dong-abank-component.component.css']
})
export class DongABankComponentComponent {
  data:any 
  errMessage:string='' 
  constructor(_service:DongABankService)
  {
     _service.getDongABankData().subscribe({ 
      next:(data)=>{ 
        this.data=data 
      }, 

     error:(err)=>{ 
      this.errMessage=err
      } 
    }) 
  }
}
