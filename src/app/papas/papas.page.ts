import { Component, OnInit } from '@angular/core';
import { taskI } from '../models/task.interface';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-papas',
  templateUrl: './papas.page.html',
  styleUrls: ['./papas.page.scss'],
})
export class PapasPage implements OnInit {
  todo: taskI = {
    nombre: '',
    precio: '',
    detalle: ''
  };
  todoId = null;
  constructor(
    private route: ActivatedRoute , private nav: NavController,
    private todoService: TodoService, private loadingController: LoadingController
    ) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id' ];
    if (this.todoId) {
      this.loadTodo();
    }
  }
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading ...'
 });
    await loading.present();
    this.todoService.getTodo(this.todoId).subscribe(resp => {
    loading.dismiss();
    this.todo = resp;
  });

  }
}
