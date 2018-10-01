import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../servicies/todo.service';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: any;
  todo = {
    TodoText: ''
  };
  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.getTodes();
  }

  getTodes() {
    this.todoService.getTodos().subscribe(todo => {
      this.todos = todo;
      console.log(this.todos);
      console.log(todo);
    });
  }

  onSubmit() {
    this.todoService.addTodo(this.todo).subscribe(todo => {
      console.log(todo);

      this.getTodes();

    });
  }

  onRemove(id) {
    console.log(id);
    this.todoService.deleteTodo(id).subscribe( () => this.getTodes());
    console.log('Todo Deleted');
  }

}
