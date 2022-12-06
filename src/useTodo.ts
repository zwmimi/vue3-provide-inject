import { ref } from "vue";

type Todo = {
  id: number;
  title: string;
};

const defaultTodos = [
  { id: 0, title: "first" },
  { id: 2, title: "second" },
];

export const todos = ref<Todo[]>(defaultTodos);
export const addTodo = (title: string) => {
  const newTodo: Todo = {
    id: Math.random(),
    title,
  };
  todos.value.push(newTodo);
};
