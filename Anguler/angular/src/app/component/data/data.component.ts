import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  drs: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>('http://127.0.0.1:3000/doctors').subscribe(response => {
      console.log(response);
      this.drs = response;

    })

  }

}
