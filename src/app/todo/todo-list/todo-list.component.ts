import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListDataService } from '../list-data.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public subscription;
  data : string[];
  
  constructor(
    private liService: ListDataService 
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); 
  }

  ngOnInit(): void {
    this.subscription = this.liService.get().subscribe(msg => this.data = msg);
  }
}