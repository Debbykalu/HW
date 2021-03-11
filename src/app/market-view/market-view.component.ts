import { Component, OnInit } from '@angular/core';
import { ChakaService } from '../chaka.service';
import { Stock } from '../stock.model';
import { Sector } from '../sector.model';

@Component({
  selector: 'app-market-view',
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.css']
})
export class MarketViewComponent implements OnInit {
  stocks:Stock[] = []
  sectors:Sector[] = []
  constructor(private _service: ChakaService){

  }
  ngOnInit():void{
    this.getStocks();
    this.getSectors();
  }
  getStocks() {
    this._service.getStocks().subscribe((stocks:Stock[]) => {
        this.stocks = stocks;
    });
  }
  getSectors(){
    this._service.getSectors().subscribe((sectors:Sector[]) => {
      this.sectors = sectors;
  });
  }

}
