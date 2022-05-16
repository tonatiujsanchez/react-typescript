import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';
import TodoForm from './components/TodoForm';


const UseContextTodo = () => {

    const { todoState } = useTodos()

    const todosCompleted = todoState.todos.filter(todo => todo.completed).length
    const todosPending = todoState.todos.filter(todo => !todo.completed).length

    return (

        <div className='max-w-lg mx-auto px-2'>
            <h1 className='font-bold text-2xl mb-1 text-center'>TODOS</h1>
            <div className='flex justify-around mb-5'>
                <p className='font-semibold uppercase text-sm text-red-600'>Pendientes: <span className='font-bold text-base'>{todosPending}</span> </p>
                <p className='font-semibold uppercase text-sm text-green-600'>Completados: <span className='font-bold text-base'>{todosCompleted}</span> </p>
            </div>
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default UseContextTodo