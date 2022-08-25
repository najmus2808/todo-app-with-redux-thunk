import { edited, loaded } from "../actions";

const updateTodo = (id, text) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://todo-app-by-najmus-sakib.herokuapp.com/todos/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          text: text,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    if (todo) {
      const responseTodos = await fetch(
        "https://todo-app-by-najmus-sakib.herokuapp.com/todos"
      );
      const todos = await responseTodos.json();

      dispatch(edited(todo.id, todo.text));
      dispatch(loaded(todos));
    }
  };
};

export default updateTodo;
