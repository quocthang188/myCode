import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BT-Angular';

  WelcomMessage = "Hey Guest!"
  DataFromOtherComponent:any =null
  MyValue = 100
}
