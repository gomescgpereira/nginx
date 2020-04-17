import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TarefaService } from './services/tarefa.service';
import { Tarefa } from '../models/tarefa.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // tslint:disable-next-line:ban-types
  public mode = 'list';
  public title = 'Minhas Tarefas';
  public todos: Todo[] = [];
  tar = {} as Tarefa;
  public tarefas: Tarefa[] = [];
  public form: FormGroup;
  /**
   *
   */
  constructor(private fb: FormBuilder,private tarService: TarefaService) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    });
   this.load();

  }

  ngOnInit() {
   // this.getTars();
  }

  getTars() {
    this.tarService.getCars().subscribe((tarefas: Tarefa[]) => {
      this.tarefas = tarefas;
    });
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if (index  !== -1) {
        this.todos.splice(index, 1);
        this.salve();
    }
  }
  

  markAsDone(todo: Todo){
   todo.done = true;
   this.salve();
  }

  markAsUndone(todo: Todo){
    todo.done = false;
    this.salve();
  }

  add(){
    const title = this.form.controls.title.value;
    const id =  this.todos.length + 1;


    this.todos.push(new Todo(id, title, false));
    this.salve();

    this.clear();
  }

  clear(){
    this.form.reset();

  }

  salve(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
    this.mode = 'list';
  }

  load(){
    const data = localStorage.getItem('todos');
    if (data){
      this.todos = JSON.parse(data);
    } else {
      this.todos = [];
    }
  }

  changeMode(mode: string) {
    this.mode = mode;
  }
  // LoadAmpq() {
  //   const connection =  Amqp.connection('amqp://localhost');
  //   const exchange = connection.declareExchange('ExchangeName');
  //   const queue = connection.declareQueue('QueueName');
  //   queue.bind(exchange);
  //   queue.activateConsumer((message) => {
  //      console.log('Message received: ' + message.getContent());
  //      this.todos.push(message.getContent());
  //   });
  // }
}
