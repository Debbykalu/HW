import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from './news/news.component';
import {MarketViewComponent} from './market-view/market-view.component';

const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'market', component: MarketViewComponent },
  { path: '',redirectTo: '/market', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
