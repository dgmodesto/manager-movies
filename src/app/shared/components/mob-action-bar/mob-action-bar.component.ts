import { Component, Input, OnInit } from '@angular/core';
import * as app from '@nativescript/core/application';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
@Component({
  selector: 'app-mob-action-bar',
  templateUrl: './mob-action-bar.component.html',
  styleUrls: ['./mob-action-bar.component.css']
})
export class MobActionBarComponent implements OnInit {

  constructor() { }

  @Input()
  title = '';

  @Input()
  subtitle = '';



  showDrawer() {
    const sidedrawer = <RadSideDrawer><any>app.getRootView();
    sidedrawer.showDrawer();
  }

  ngOnInit() {
  }

}
