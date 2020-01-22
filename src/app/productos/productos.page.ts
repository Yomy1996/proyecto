import { Component, OnInit } from '@angular/core';
import { taskI } from '../models/task.interface';
import { TodoService } from '../services/todo.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  todos: taskI[];
  constructor( private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => this.todos = res );
  }

}
