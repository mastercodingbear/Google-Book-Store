import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { StoreComponent } from './store/store.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-card/book-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: StoreComponent }]),
    MatProgressSpinnerModule,
  ],
  declarations: [StoreComponent, BookListComponent, BookCardComponent],
  exports: [StoreComponent],
})
export class StoreModule {}
