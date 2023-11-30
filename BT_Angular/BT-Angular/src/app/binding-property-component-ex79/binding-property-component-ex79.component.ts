import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component-ex79',
  templateUrl: './binding-property-component-ex79.component.html',
  // template:`
  // <div>Enter your name: <input type="text" [id]="nameid" [value]="name"></div>
  // <br>
  // <!-- <div>Enter your email: <input type="text" id="{{emailid}}" value="{{email}}"></div> -->
  // <div>Enter your email: <input type="text" [id]="emailid" [value]="email" [disabled]="isDisabled"></div>
  // `,
  styleUrls: ['./binding-property-component-ex79.component.css']
})
export class BindingPropertyComponentEx79Component {
  public name:string="Trần Duy Thanh" 
  public email:string="thanhtd@uel.edu.vn" 
  public nameid:string="nameid" 
  public emailid:string="emailid" 
  public isDisabled:boolean=true
}
