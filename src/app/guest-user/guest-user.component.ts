import { Component, OnInit } from '@angular/core';
import { books, author } from '../data-format/data';

@Component({
  selector: 'app-guest-user',
  templateUrl: './guest-user.component.html',
  styleUrls: ['./guest-user.component.css']
})
export class GuestUserComponent implements OnInit {
  bookList: any[];
  bookData: any[];
  authData: any[];
  searchwordAuthor: string;
  searchwordBook: string;

  constructor() { }

  ngOnInit() {
    this.searchwordAuthor = '';
    this.bookData = books;
    this.authData = author;
    this.bookList = this.bookData;
  }

  searchThis(criteria: string) {
    this.bookList = this.bookData
    if (this.searchwordBook || this.searchwordAuthor) {
      switch(criteria) {
        case "author":
          let searchId = this.getAuthor(this.searchwordAuthor);
          if(!searchId) {
            this.bookList = [];
          } else {
            this.bookList = this.bookList.filter((ele) => { let arrayelement = ele.author_id.toLowerCase()
              return arrayelement.includes(searchId.toLowerCase())
            });
          }
          break;
        case "name":
            this.bookList = this.bookList.filter((ele) => { let arrayelement = ele.name.toLowerCase()
              return arrayelement.includes(this.searchwordBook.toLowerCase())
            });
          break;
        default:
          break;
      }
    }
    else {
      console.log(this.bookList)
    }
    console.log(this.bookList)
  }
  getAuthor(authname: string): string {
    let data = this.authData.filter((ele) => {
      let arrayelement = ele.author_name.toLowerCase()
            return arrayelement.includes(authname.toLowerCase())
          });
        return data[0]? data[0].id : '';
  }
}
