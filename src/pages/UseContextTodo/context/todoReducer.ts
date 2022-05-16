import { TodoState, Todo } from '../interfaces/interfaces';


type TodoAction = 
    | { type: 'addTodo', payload: Todo }
    | { type: 'toggleTodo', payload: { id: string } }
    | { type: 'deleteTodo', payload: { id: string } }

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
 
    switch (action.type) {

        case 'addTodo':
            return {
                ...state,
                todos: [ ...state.todos, action.payload ]
            }

        case 'toggleTodo':            
            return {
                ...state,
                todos: state.todos.map( 
                    ({...todo}) => todo.id === action.payload.id 
                        ? { ...todo, completed : !todo.completed } 
                        : todo 
                )
            }
        case 'deleteTodo':
            return {
                ...state,
                todos: state.todos.filter( todo => todo.id !== action.payload.id )
            }    
        default:
            return state;
    }
}
