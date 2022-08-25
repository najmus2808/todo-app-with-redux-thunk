import { edited, loaded } from "../actions";

const updateTodo = (id, text) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost:8000/todos/${id}`,
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
        "http://localhost:8000/todos"
      );
      const todos = await responseTodos.json();

      dispatch(edited(todo.id, todo.text));
      dispatch(loaded(todos));
    }
  };
};

export default updateTodo;
