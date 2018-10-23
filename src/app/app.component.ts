import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'headcount';

  constructor (
    public http: HttpClient
  ) {

  }

  ngOnInit() {
    this.http.get('/api/')
      .subscribe(res => {
        console.log('hello from server api', res);
      });

  }
}
