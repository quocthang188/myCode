import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-compact',
  templateUrl: './compact.component.html',
  styleUrls: ['./compact.component.css']
})
export class CompactComponent {
  @Input("AppComponentData") public DataFromAppComponent: any
  @Input("MyValueData") public MyValueData:any

  @Output() public childEvent = new EventEmitter()
  sendDataToAppComponent()
  {
    let data ={"id": 123,
                "name":"CoCa",
                "price":10000}
    this.childEvent.emit(data)
  }
}
