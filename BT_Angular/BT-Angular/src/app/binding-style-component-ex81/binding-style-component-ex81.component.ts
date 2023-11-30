import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-style-component-ex81',
  templateUrl: './binding-style-component-ex81.component.html',
  styleUrls: ['./binding-style-component-ex81.component.css']
})
export class BindingStyleComponentEx81Component {
  public isError:boolean=false
  public textStyle={ 
    color:'darkorange', 
    fontSize:'26px' 
  }
  public autoCap ={
    
  }
}
