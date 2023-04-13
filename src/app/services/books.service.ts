import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Book, BooksRepository } from '../states/books.repository';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient, private repo: BooksRepository) {}

  get loading$() {
    return this.loading.asObservable();
  }

  getBooks(orderBy: string = 'relevance', q: string = '') {
    if (q === '') {
      return;
    }
    const params = new HttpParams().set('orderBy', orderBy).set('q', q);
    this.loading.next(true);
    return this.http
      .get<{ items: Book[] }>(
        `https://www.googleapis.com/books/v1/volumes?maxResults=20`,
        { params }
      )
      .pipe(
        tap((books) => {
          this.loading.next(false);
          this.repo.setBooks(books.items || []);
        })
      );
  }
}
