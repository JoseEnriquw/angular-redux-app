import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actionsF from '../../filtro/filtro.actions';
import * as actionsT from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent {

  filtroActual: actionsF.filtrosValidos = 'todos';
  filtros: actionsF.filtrosValidos[] = ['todos','completados','pendientes'];
  pendientes: number = 0;

  constructor(private store: Store<AppState>){

    this.store.subscribe(state=> { 
      this.filtroActual=state.filtro;
      this.pendientes= state.todos.filter(x=> !x.completado).length;
      
    })
  }

  cambiarFiltro(filtro: actionsF.filtrosValidos){
    this.store.dispatch(actionsF.setFiltro({filtro}));
  }

  limpiarCompletados(){
    
    this.store.dispatch(actionsT.limpiarCompletados());
  }
}
