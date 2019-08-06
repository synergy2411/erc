import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent{
  @Input() user : any;
  dynamicClass = {'feature' : false, 'border' : true}
  dynamicStyle = {
    'text-transform' : 'uppercase'
  }

  onToggle(){
    this.dynamicClass.feature = !this.dynamicClass.feature;
    this.dynamicClass.border = !this.dynamicClass.border;
  }
}
