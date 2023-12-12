import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  todos : Todo[] = [];
  filtroActual!: filtrosValidos;

  constructor(private store: Store<AppState>){

    this.store.subscribe(({todos,filtro})=>{

      this.todos= todos;
      this.filtroActual= filtro;
    });
  }
}
