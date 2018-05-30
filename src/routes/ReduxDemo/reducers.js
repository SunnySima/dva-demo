import {
  combineReducers
} from 'redux'
import {
  VisiableFilter,
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIABLE_FILTER
} from './action'

const {
  SHOW_ALL
} = VisiableFilter;

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          complete: false
        }
      ]
    case TOGGLE_TODO:
      return state && state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            complete: !todo.complete
          });
        }
        return todo;
      });
    default:
      return state;
  }
}


function visiableFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIABLE_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos,
  visiableFilter
});

export default todoApp;
