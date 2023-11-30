import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-component-ex84',
  templateUrl: './binding-two-way-component-ex84.component.html',
  styleUrls: ['./binding-two-way-component-ex84.component.css']
})
export class BindingTwoWayComponentEx84Component {
  public hsa:string=""
  public hsb:string=""
  public hsc:string=""
  public ketqua:string=""
  public delta:string=""

  xulyGiai(){
    let a = parseFloat(this.hsa)
    let b = parseFloat(this.hsb)
    let c = parseFloat(this.hsc)
    let delta =b*b-4*c*a
    let sqrtdelta = Math.sqrt(delta)
    if ( delta < 0 )
    {
      this.ketqua = "Vo nghiem";
    }
    else if ( delta = 0 )
    {
      this.ketqua = "x=" + -b/(2*a);
    }
    else
    {
      var x1 = (-b - sqrtdelta)/2*a;
      var x2 = (-b + sqrtdelta)/2*a;             
      this.ketqua = (`x1 = ${x1}, x2 = ${x2}`);
    }
  }
  
  clear()
  {
    this.hsa =""
    this.hsb =""
    this.hsc =""
    this.ketqua =""
  }
}
