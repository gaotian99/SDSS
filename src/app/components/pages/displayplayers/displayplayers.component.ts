import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-displayplayers',
  templateUrl: './displayplayers.component.html',
  styleUrls: ['./displayplayers.component.css']
})
export class DisplayplayersComponent implements OnInit 
{

  public Players: any=[];

  constructor(
    private http: HttpClient) { }

  ngOnInit() 
  {
    this.http.get("http://localhost:3000/players").subscribe(data => {
      console.log(data);
      this.Players=data;
    });

}}
