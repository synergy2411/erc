import {
  Component, OnInit, OnChanges, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy, DoCheck, Input, SimpleChanges, ChangeDetectionStrategy
} from '@angular/core';
import { IUser } from '../model/user.interface';
import { USER_DATA } from '../model/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, DoCheck {
  @Input() title: string;
  @Input() todo: string;

  users: IUser[];

  onMoreInfo(user: IUser) {
    alert(`${user.company}!`);
  }

  childValue: any;
  constructor() { console.log("Constructor") }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges", changes);
  }
  ngOnInit() {
    console.log("ngOnInit");
    this.users = USER_DATA;
  }

  ngDoCheck() { console.log("ngDoCheck") }
  ngAfterContentInit() { console.log("ngAfterContentInit") }
  ngAfterContentChecked() { console.log("ngAfterContentChecked") }
  ngAfterViewInit() { console.log("ngAfterViewInit") }
  ngAfterViewChecked() { console.log("ngAfterViewChecked") }
  ngOnDestroy() { console.log("ngOnDestroy") }


}
