import { Component, OnInit } from '@angular/core';
import { author } from '../data-format/data';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  authList: any[];
  bookData: any[];
  authData: any[];
  searchword: string;

  constructor() { }

  ngOnInit() {
    this.searchword = '';
    this.authData = author;
    this.authList = this.authData;
  }

  
}
