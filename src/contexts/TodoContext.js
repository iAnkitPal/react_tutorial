import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
  todos:[
    {
      id:Date.now(),
      completed:true
    }
  ],
  addTodo: (todo) => {},
  updateTodo: (id,todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;