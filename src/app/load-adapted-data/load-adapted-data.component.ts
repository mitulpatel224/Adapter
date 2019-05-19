import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataAdapter } from '../adapter/data-adapter';
import { Response } from '../models';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-load-adapted-data',
  templateUrl: './load-adapted-data.component.html',
  styleUrls: ['./load-adapted-data.component.scss'],
  providers: [
    DataAdapter
  ]
})
export class LoadAdaptedDataComponent implements OnInit {

  /** Static URL */
  readonly DATA_URL: string = 'https://api.publicapis.org/entries?category=animals';

  /** Responce data */
  public data: object;

  constructor(
    private http: HttpClient,
    private dataAdaper: DataAdapter,
  ) {
    this.loadData().subscribe((response: Response) => {
      console.log('Adapted response:');
      console.log(Object.assign(response));

      this.data = response;
    });
  }

  ngOnInit() {
  }

  /**
   * Hit the URL and load the data
   * @returns Observable<Response>
   */
  loadData(): Observable<Response> {
    return this.http.get<Response>(this.DATA_URL)
      .pipe(
        map((response) => {
          console.log('Actual response:');
          console.log(Object.assign({}, response));

          response.entries = response.entries.map(entry => this.dataAdaper.convertFromResponse(entry));
          return response;
        })
      );
  }

}
