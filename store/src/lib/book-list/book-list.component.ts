import { Component, Input } from '@angular/core';
import { Book } from '@states';

@Component({
  selector: 'google-book-store-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  @Input() books!: Book[] | null;
}
