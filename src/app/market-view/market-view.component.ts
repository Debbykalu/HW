import { Component, OnInit } from '@angular/core';
import { ChakaService } from '../chaka.service';
import { Stock } from '../models/stock.model';
import { Sector } from '../models/sector.model';



@Component({
  selector: 'app-market-view',
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.css']
})
export class MarketViewComponent implements OnInit {
  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }
  stocks:Stock[] = []
  sectors:Sector[] = []
  fourRowSectors:Sector[] = []
  threeRowSectors:Sector[] = []
  mysectors:Sector[] = []
  constructor(private _service: ChakaService){

  }
  ngOnInit():void{
    this.getStocks();
    this.getSectors();
    this.getMySectors();
  }
  getStocks() {
    this._service.getStocks().subscribe((stocks:Stock[]) => {
        this.stocks = stocks;
    });
  }
  getSectors(){
    this._service.getSectors().subscribe((sectors:Sector[]) => {
      this.fourRowSectors = sectors.slice(0,8);
      this.threeRowSectors = sectors.slice(8);
  });
  
  }
  getMySectors(){
    this._service.getSectors().subscribe((mysectors:Sector[]) => {
      this.mysectors = mysectors;
  });
  }
}
