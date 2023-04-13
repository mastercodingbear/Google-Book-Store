import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  orderBy!: string;
  loading$: Observable<boolean>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private booksService: GoogleBooksService,
    public repo: BooksRepository
  ) {
    this.route.queryParams.subscribe((params) => {
      this.query = params['q'] || '';
      this.orderBy = params['orderBy'] || 'relevance';
    });
    this.loading$ = this.booksService.loading$;
  }

  onChangeOrderBy() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { orderBy: this.orderBy },
      queryParamsHandling: 'merge',
    });
  }
}
