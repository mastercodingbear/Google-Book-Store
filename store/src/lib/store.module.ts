import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { StoreComponent } from './store/store.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-card/book-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: StoreComponent }]),
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  declarations: [StoreComponent, BookListComponent, BookCardComponent],
  exports: [StoreComponent],
})
export class StoreModule {}
