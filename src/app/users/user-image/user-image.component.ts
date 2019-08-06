import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent{
  @Input() user : any;
  @Output() childEvent = new EventEmitter<any>()
  @Output() childCtrlEvent = new EventEmitter<string>()

  onInfo(user : any){
    this.childEvent.emit(user)
  }
  onChildEvent(value : string){
    this.childCtrlEvent.emit(value);
  }
}
