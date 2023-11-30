import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent{
  public style1:string = "myStyle1"
  public complexStyle ={
    "myStyle1":true,
    "myStyle2":true
  }
  
  processClick(data:string) {
    alert(data)
  }
}
