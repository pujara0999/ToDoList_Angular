import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../list-data.service'
@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  data : string = "";
  ngOnInit(): void {
  }
  constructor(
    private liService: ListDataService
  ) {}

  
  public addToList():void {
    this.liService.put(this.data);
    console.log(" "+this.data+" ");
  }
  public clear(): void {
    this.liService.clear();
  }

  public changeValue(e) {
    this.data = e.target.value;
  }


}
