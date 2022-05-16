import { Props, Todo, TodoState } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { useReducer } from 'react';
import { todoReducer } from "./todoReducer";


const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Recolectar la pidra de la Mente',
            completed: false
        },
        {
            id: '2',
            desc: 'Recolectar la pidra del Tiempo',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}



const TodoProvider = ({ children }: Props) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

    const toggleTodo = (id: string) => {
        dispatch({ 
            type: "toggleTodo",
            payload: { id }
         })
    }

    const addTodo = ( newTodo: Todo ) => {
        dispatch({
            type: "addTodo",
            payload: newTodo
        })
    }

    const deleteTodo = ( id: string ) => {
        dispatch({
            type:"deleteTodo",
            payload: { id }
        })
    }

    return (
        <TodoContext.Provider value={{ 
            todoState,
            toggleTodo,
            addTodo,
            deleteTodo
        }}>
                
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider