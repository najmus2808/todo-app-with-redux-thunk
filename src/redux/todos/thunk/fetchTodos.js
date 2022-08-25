import { loaded } from "../actions";

const fetchTodos = async (dispatch) => {
  const response = await fetch(
    "https://todo-app-by-najmus-sakib.herokuapp.com/todos"
  );
  const todos = await response.json();

  dispatch(loaded(todos));
};

export default fetchTodos;
