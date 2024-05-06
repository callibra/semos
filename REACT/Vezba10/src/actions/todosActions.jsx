import axios from "axios";
import { TODOS_API_URL } from "../constants/constants";
import { TODOS_REJECT, TODOS_RESOLVE, TODOS_CHECKED, TODOS_DELETE } from "../constants/constants";

export const todosResolve = (data) => ({
  type: TODOS_RESOLVE,
  payload: data,
});

export const todosReject = (error) => ({
  type: TODOS_REJECT,
  payload: error,
});

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(TODOS_API_URL);
      dispatch(todosResolve(res.data));
    } catch (error) {
      dispatch(todosReject(error.message));
    }
  };
};

export const deleteTodo = (id) => ({
  type: TODOS_DELETE,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TODOS_CHECKED,
  payload: id,
});
