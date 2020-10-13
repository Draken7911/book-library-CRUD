import { Injectable } from '@angular/core';
import {Book} from "./book";
import { Http, Response } from "@angular/http";

@Injectable()
export class BookDataService {
  private booksUrl = 'http://localhost:3000/api/books';

  constructor(private http: Http) { }

  private handleError (error: any) {
    console.log("error");
  };

  getBooks(): Promise<void | Book[]> {
    return this.http.get(this.booksUrl)
      .toPromise()
      .then(response => response.json() as Book[])
      .catch(this.handleError);
  }

  getSingleBook(bookID: String): Promise<void | Book> {
    return this.http.get(this.booksUrl + '/' + bookID)
      .toPromise()
      .then(response => response.json() as Book)
      .catch(this.handleError);
  }

  createBook(newBook: Book): Promise<void | Book> {
    console.log(newBook)
    return this.http.post(this.booksUrl, newBook)
      .toPromise()
      .then(response => response.json() as Book);
  }

  updateBook(updatedBook: Book): Promise<void | Book> {
    return this.http.put(this.booksUrl + "/" + updatedBook._id, updatedBook)
      .toPromise()
      .then(response => response.json() as Book);
  }

  deleteBook(bookID: string): Promise<void | string> {
    return this.http.delete(this.booksUrl + "/" + bookID)
      .toPromise()
      .then();
  }
}
