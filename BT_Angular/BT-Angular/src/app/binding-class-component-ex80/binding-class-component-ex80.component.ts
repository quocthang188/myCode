import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-class-component-ex80',
  templateUrl: './binding-class-component-ex80.component.html',
  styleUrls: ['./binding-class-component-ex80.component.css']
})
export class BindingClassComponentEx80Component {
  public success="text-success" 
  public error="text-error" 
  public primary="text-primary" 
  public normal="text-normal" 
  public multiClass={ 
    "text-primary":true, 
    "text-normal":true, 
    "text-error":true }
}
