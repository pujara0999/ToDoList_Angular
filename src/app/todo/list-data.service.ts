import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {
  private todoListInternal :string[] = [];
  private todoList = new Subject<string[]>();
  
  constructor() { }

  public get(): Observable<string[]> {
    return this.todoList.asObservable();
  }
  public put(value: string): void {
    this.todoListInternal.push(value);
    this.todoList.next(this.todoListInternal);
  }

  public clear(): void {
    this.todoListInternal = [];
    this.todoList.next(this.todoListInternal);
  }
}