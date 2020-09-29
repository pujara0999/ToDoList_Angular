import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListDataService } from '../list-data.service'


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public subscription;
  count: number = 0;
  
  constructor(
    private liService: ListDataService // inject service
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // onDestroy cancels the subscribe request
  }

  ngOnInit(): void {
    this.subscription = this.liService.get().subscribe(msg => this.count = msg.length);
  }

}