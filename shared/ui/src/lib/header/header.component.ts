import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { GoogleBooksService } from '@services';
import { BooksRepository } from '@states';

@Component({
  selector: 'google-book-store-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchTerm = '';
  searchSubject = new Subject<string>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private booksService: GoogleBooksService,
    public repo: BooksRepository
  ) {
    this.searchSubject.pipe(debounceTime(500)).subscribe((query) => {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { q: query },
        queryParamsHandling: 'merge',
      });
    });
    this.route.queryParams.subscribe((params) => {
      const orderBy = params['orderBy'];
      const q = params['q'];
      this.searchTerm = q;
      this.booksService.getBooks(orderBy, q)?.subscribe();
    });
  }

  onSearch() {
    this.searchSubject.next(this.searchTerm);
  }

  onClear() {
    this.searchTerm = '';
    this.searchSubject.next('');
  }
}
