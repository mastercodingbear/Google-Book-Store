import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GoogleBooksService } from '@services';
import { BooksRepository } from '@states';
import { Observable } from 'rxjs';

@Component({
  selector: 'google-book-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent {
  query!: string;
  loading$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private booksService: GoogleBooksService,
    public repo: BooksRepository
  ) {
    this.route.queryParams.subscribe((params) => {
      this.query = params['q'];
    });
    this.loading$ = this.booksService.loading$;
  }
}
