import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-relazioni',
  templateUrl: './relazioni.component.html',
  styles: [
  ]
})
export class RelazioniComponent implements OnInit {

  webApi = 'http://localhost:5200';
  dataSource : any;
  constructor(private http: HttpClient) {
    this.http.get<any[]>(this.webApi + '/WeatherForecast').subscribe(data => {
      this.dataSource  = new DataSource({
        store: new ArrayStore({
          data: data,
        }),
      });
    });
   }

  ngOnInit(): void {
  }

}
