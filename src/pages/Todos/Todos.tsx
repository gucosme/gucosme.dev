import {
  Button,
  Container,
  InputUnstyled,
  InputUnstyledProps,
  styled,
  Typography,
} from "@mui/material";
import { ForwardedRef, forwardRef, useReducer, useState } from "react";

const InputEl = styled("input")(({ theme }) => ({
  border: "none",
  fontSize: theme.typography.body1.fontSize,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  width: "100%",
  "&:hover": {
    backgroundColor: "#eee",
  },
  "&:focus": {
    outline: "thin dotted",
  },
}));

const EditableItem = forwardRef(
  (props: InputUnstyledProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <InputUnstyled components={{ Input: InputEl }} {...props} ref={ref} />
    );
  }
);

function* genId() {
  let id = 0;
  while (true) {
    yield ++id;
  }
}

const idGenerator = genId();
const getNewId = (): number => {
  return idGenerator.next().value!;
};

interface TodoItem {
  id: number;
  value: string;
  done: boolean;
}
type Todos = Array<TodoItem>;

const makeEmptyTodo = (): TodoItem => ({
  id: getNewId(),
  value: "",
  done: false,
});
const todosReducer = (
  state: Todos,
  action: { type: string; payload?: any }
): Todos => {
  const actionFn = {
    addTodo: () => state.concat(makeEmptyTodo()),
    changeTodo: () => {
      const index = state.findIndex(t => t.id === action.payload.id);
      if (index > -1) {
        return [
          ...state.slice(0, index),
          action.payload,
          ...state.slice(index + 1),
        ];
      }
      return state;
    },
  }[action.type];

  if (actionFn) return actionFn();
  return state;
};

const emptyTodoItem: TodoItem = makeEmptyTodo();
const useTodos = (/*todos: Todos*/): [Todos, any] => {
  const initialState = [emptyTodoItem];
  const [state, dispatch] = useReducer(todosReducer, initialState);

  const addTodo = () => dispatch({ type: "addTodo" });
  const changeTodo = (payload: TodoItem) =>
    dispatch({ type: "changeTodo", payload });

  return [state, { addTodo, changeTodo }];
};

const Todos = () => {
  const [editable, setEditable] = useState(true);
  const toggleEditable = () => setEditable(prev => !prev);

  const [todos, { addTodo, changeTodo }] = useTodos();
  const handleChange = (value: string, id: number) => {
    changeTodo({ id, value, done: false });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5">To-Do&apos;s</Typography>
      <Button variant="contained" onClick={addTodo}>
        add
      </Button>
      <Button variant="contained" onClick={toggleEditable}>
        {editable ? "skip edditing" : "edit"}
      </Button>
      {todos.map((t: TodoItem, index) => (
        <EditableItem
          key={t.id}
          disabled={!editable}
          autoFocus={index === 0}
          value={t.value}
          type="text"
          placeholder="e.g. make coffee"
          onChange={e => handleChange(e.target.value, t.id)}
        />
      ))}
    </Container>
  );
};

export default Todos;
