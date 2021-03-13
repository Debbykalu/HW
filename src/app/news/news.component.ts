import { Component, OnInit } from '@angular/core';
import { ChakaService } from '../chaka.service';
import { News } from '../models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public news: News[] = [];
  constructor(private _service: ChakaService) { }

  ngOnInit(): void {
    this.getNews();
  }
  public getNews() {
    this._service.getNews().subscribe((news: News[]) => {
      this.news = news;
    });
  }

}
