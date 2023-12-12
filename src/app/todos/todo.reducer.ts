import { createReducer, on } from '@ngrx/store';
import { borrar, crear, editar, limpiarCompletados, toggle, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState : Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Salvar a tu vieja'),
    new Todo('Salvar a tu hermana'),
    new Todo('Salvar uno más')
];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(toggle, (state, {id}) => {

    return state.map(todo=> {
      if(todo.id===id)
      {
        return {
          ...todo,
          completado: !todo.completado
        }
      }
      else
      {
        return todo;
      }
    });
  }),
  on(editar, (state, {id,texto}) => {
    
    return state.map(todo=> {
      if(todo.id===id)
      {
        return {
          ...todo,
          texto: texto
        }
      }
      else
      {
        return todo;
      }
    });
  }),
  on(borrar, (state, {id}) =>  state.filter(todo=> todo.id !== id )),
  on(toggleAll, (state, {completado}) => {

    return state.map(todo=> {
        return {
          ...todo,
          completado: completado
        }
    });
  }),
  on(limpiarCompletados, (state) => {

    return state.filter(todo=> !todo.completado);
  }),
  
);