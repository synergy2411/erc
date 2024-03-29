import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from '../model/user.interface';
import { DataService } from '../services/data.service';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation : ViewEncapsulation.
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
  constructor(public dataService: DataService) {
    // console.log("Constructor")
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("ngOnChanges", changes);
  }
  ngOnInit() {
    this.dataService.getJSONData()
      .subscribe(response => {
        this.users = <IUser[]>response;
      });
  }

  ngDoCheck() {
    // console.log("ngDoCheck")
  }
  ngAfterContentInit() {
    // console.log("ngAfterContentInit")
  }
  ngAfterContentChecked() {
    //  console.log("ngAfterContentChecked")
  }
  ngAfterViewInit() {
    // console.log("ngAfterViewInit")
  }
  ngAfterViewChecked() {
    // console.log("ngAfterViewChecked")
  }
  ngOnDestroy() {
    // console.log("ngOnDestroy")
  }


}


// npm i firebase --save
