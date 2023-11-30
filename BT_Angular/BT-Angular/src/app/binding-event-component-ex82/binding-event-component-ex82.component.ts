import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component-ex82',
  templateUrl: './binding-event-component-ex82.component.html',
  styleUrls: ['./binding-event-component-ex82.component.css']
})
export class BindingEventComponentEx82Component {
  onClick(event:any){ 
    alert(event.pointerId) 
  } 
  onSubmit(value:string){ 
    alert(value) 
  }
  result: string =''
  resultNUm: number =0
  acongb(a:string,b:string) {
    var a1 = parseFloat(a) 
    var b1 = parseFloat(b)
    this.resultNUm = a1 + b1;
    
  }
  atrub(a:string,b:string) {
    var a1 = parseFloat(a) 
    var b1 = parseFloat(b)
    this.resultNUm = a1 - b1;
    
  }
  anhanb(a:string,b:string) {
    var a1 = parseFloat(a) 
    var b1 = parseFloat(b)
    this.resultNUm = a1 * b1;
    
  }
  achiab(a:string,b:string) {
    var a1 = parseFloat(a) 
    var b1 = parseFloat(b)
    this.resultNUm = a1 / b1;
    
  }
  reset(a:string, b:string){
   this.result =''
   this.resultNUm=0
  }

}
