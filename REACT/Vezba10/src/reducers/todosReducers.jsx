import { TODOS_REJECT, TODOS_RESOLVE, TODOS_CHECKED, TODOS_DELETE, TODOS_LOADING } from "../constants/constants";

const initialState = {
  todos: [],
  message: undefined,
  loading: false,
};

const todosReducers = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case TODOS_REJECT:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case TODOS_RESOLVE:
      return {
        ...state,
        todos: action.payload,
        message: undefined,
        loading: false,
      };
    case TODOS_DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TODOS_CHECKED:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    default:
      return state;
  }
};

export default todosReducers;
