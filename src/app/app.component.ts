import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  employee =[]
  //url= "http://localhost:3000"
  url="https://jsonplaceholder.typicode.com/posts"
  constructor( private http: HttpClient){

  }
  ngOnInit(): void {
    this.update();

    fetch(this.url)
    .then(response => response.json())
    .then(json => {
      this.employee = json;
      console.log(this.employee.map(t => t['id'])); 
      });
  }
  update(){

  }
}
