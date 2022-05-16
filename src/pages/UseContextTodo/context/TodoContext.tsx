import { createContext } from "react";
import { TodoState, Todo } from '../interfaces/interfaces';

export type TodoContextProps = {
    todoState: TodoState,
    toggleTodo: ( id: string ) => void,
    addTodo: ( todo: Todo ) => void
    deleteTodo: ( id: string ) => void
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);




