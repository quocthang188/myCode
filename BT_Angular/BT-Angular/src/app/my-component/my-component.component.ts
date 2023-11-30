import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  public myVar: String="Hello Angular" 
  public getMyVar()
  {
    return this.myVar
  }
}
