import { Component, OnInit } from '@angular/core';
import { User } from '../profile/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  currentPath: string;
  constructor() { }

  ngOnInit(): void {
  }

  changeRouterLink(link: string) {
    console.log(link);
    this.currentPath =  link;
  }

  logout(): void {

  }
}
