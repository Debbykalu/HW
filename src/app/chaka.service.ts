import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import stocks_data from '../assets/stocks.json';
import sectors_data from '../assets/sectors.json';
import news_data from '../assets/news.json';

import {Stock} from './stock.model';
import {Sector} from './sector.model';
import {News} from './news.model';

@Injectable({
  providedIn: 'root'
})
export class ChakaService {

  constructor(private http: HttpClient) { }

  public getStocks():Observable<Stock[]>{
    return of(stocks_data);
  }
  public getSectors():Observable<Sector[]>{
    return of(sectors_data);
  }
  public getNews():Observable<News[]>{
    return of(news_data);
  }
}
