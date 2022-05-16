import { Todo } from '../interfaces/interfaces';
import { useTodos } from '../hooks/useTodos';

interface TodoItemProps {
    todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {

    const { toggleTodo, deleteTodo } = useTodos()

    const handleDbClick = ():void => {
        toggleTodo( todo.id )
    }

    const handleDelete = ():void => {
        deleteTodo( todo.id )
    }

    return (
        <li onDoubleClick={ handleDbClick }
            className={
                `cursor-pointer my-3 font-semibold border border-gray-400 rounded-lg px-2 py-2 flex justify-between`
            } >
            <span className={`${ todo.completed ? 'line-through text-gray-500': '' }`}>{todo.desc}</span>
            <span
                onClick={ handleDelete } 
                className='hover:scale-[0.8] hover:shadow-lg'>❌</span>
        </li>
    )
}

export default TodoItem