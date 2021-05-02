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
  searchword: string;

  constructor() { }

  ngOnInit() {
    this.searchword = '';
    this.bookData = books;
    this.authData = author;
    this.bookList = this.bookData;
  }

  searchThis(criteria: string) {
    this.bookList = this.bookData
    if (this.searchword) {
      switch(criteria) {
        case "author":
          let searchId = this.getAuthor(this.searchword);
          this.bookList = this.bookList.filter((ele) => { let arrayelement = ele.author_id.toLowerCase()
            return arrayelement.includes(searchId.toLowerCase())
          });
          break;
        case "name":
            this.bookList = this.bookList.filter((ele) => { let arrayelement = ele.name.toLowerCase()
              return arrayelement.includes(this.searchword.toLowerCase())
            });
          break;
        default:
          break;
      }
    }
    else {
      console.log(this.bookList)
    }
    console.log(this.searchword)
    console.log(this.bookList)
  }
  getAuthor(authname: string): string {
    return this.authData.filter(x => {x.author_name.toLowerCase() === authname.toLowerCase()})[0].id;
  }
}
