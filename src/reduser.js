// eslint-disable-next-line import/no-anonymous-default-export
export default function (state, action) {
  switch (action.type) {
    case "add":
      return [
        {
          nameTodo: action.payload,
          completed: false,
          id: Date.now(),
        },
        ...state,
      ];
    case "toggle":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
