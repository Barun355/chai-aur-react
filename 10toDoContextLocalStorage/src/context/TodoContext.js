import { useContext } from "react";
import { createContext } from "react";


const TodoContext = createContext({
    todos: [
        {
            todo: 'Todo msg',
            id: 1,
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext)
}