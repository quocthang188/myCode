import { Component } from '@angular/core';


@Component({
  selector: 'app-binding-two-way-component-ex83',
  templateUrl: './binding-two-way-component-ex83.component.html',
  styleUrls: ['./binding-two-way-component-ex83.component.css']
})
export class BindingTwoWayComponentEx83Component {
  public name:string='' 
  public address:string='' 
  setDefaultAddress(){ 
    this.address='13 Hung Vuong street' 
  }
}
