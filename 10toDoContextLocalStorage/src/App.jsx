import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { TodoForm, TodoItem } from './components'
import { TodoContextProvider } from './context'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos(prev => [...prev, { ...todo, id: Date.now() }])
  }

  const updateTodo = (id, todo) => {
    setTodos(prev => prev.map(prevTodo => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(prevTodo => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(prevTodo => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('tasks'))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] w-screen min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Task Tracker Application</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos && todos.map(todo => (
                <div className="w-full" key={todo.id}>
                  <TodoItem todo={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
