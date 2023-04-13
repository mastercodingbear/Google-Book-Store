import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: StoreComponent }]),
  ],
  declarations: [StoreComponent],
  exports: [StoreComponent],
})
export class StoreModule {}
