import { useState } from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const todoItem = formData.get("todo") as string;

    if (!todoItem.trim()) return;

    setTodoList((prevTodoList) => [
      ...prevTodoList,
      {
        id: Date.now(),
        text: todoItem,
        completed: false,
      },
    ]);

    event.currentTarget.reset();

    setFilter("all");
  };

  const toggleTodoCompleted = (id: number) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const filteredTodos = todoList.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const clearCompleted = () => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => !todo.completed),
    );
  };

  const deleteTodo = (id: number) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id),
    );
  };

  return {
    filter,
    addTodo,
    toggleTodoCompleted,
    setFilter,
    filteredTodos,
    clearCompleted,
    deleteTodo,
  };
};
