import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public http: HttpClient) { }

  getTodos() {
    return this.http.get('http://localhost:53761/api/Todoes');
  }
  addTodo(todo) {
    return this.http.post('http://localhost:53761/api/Todoes', todo );
  }

  deleteTodo(id) {
    return this.http.delete('http://localhost:53761/api/Todoes/' + id);
  }
}
