export function setTodo(payload) {
  return (dispatch) => {
    const type = "AUTH";
    dispatch({ type: "TODO_RECEIVED", payload });
  };
}
