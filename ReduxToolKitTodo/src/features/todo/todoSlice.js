import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload){
                    todo.text = action.payload.text
                }
            })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer