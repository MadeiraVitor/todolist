import { TodoContainer } from "./components/TodoContainer";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";

function App() {
  const {
    filter,
    addTodo,
    toggleTodoCompleted,
    setFilter,
    filteredTodos,
    clearCompleted,
    deleteTodo,
  } = useTodo();

  return (
    <TodoContainer>
      <TodoHeader />

      <TodoForm addTodo={addTodo} />

      <TodoList
        todoList={filteredTodos}
        toggleTodoCompleted={toggleTodoCompleted}
        setFilter={setFilter}
        filter={filter}
        clearCompleted={clearCompleted}
        deleteTodo={deleteTodo}
      />
    </TodoContainer>
  );
}

export default App;
