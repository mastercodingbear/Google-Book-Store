import { Component, Input } from '@angular/core';
import { Book } from '@states';

@Component({
  selector: 'google-book-store-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() book!: Book;
}
