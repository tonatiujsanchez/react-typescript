import { FormEvent, useState } from 'react';
import { useTodos } from '../hooks/useTodos';


const TodoForm = () => {

    const [todoName, setTodoName] = useState<string>('')
    const { addTodo } = useTodos()


    const handleSubmit = ( e: FormEvent <HTMLFormElement> ):void => {
        e.preventDefault()
        if( todoName.trim() === '' ){
            return
        }

        addTodo({
            id: String( Date.now() ),
            desc: todoName,
            completed: false
        })
        
        setTodoName('')
    }

    return (
        <form
            onSubmit={ handleSubmit }
            autoComplete="off" 
            className="flex rounded-md mb-5 bg-white px-1 py-1">
            <input
                type="text"
                name="name"
                value={todoName}
                onChange = { ( e ) => setTodoName( e.target.value ) }
                className="w-full px-3 py-2 outline-none"
                placeholder="Hola mundo!" />
            <input
                type="submit"
                value="Agregar"
                className="bg-slate-800 text-white rounded-lg px-4 cursor-pointer active:scale-[0.98] hover:bg-slate-900" />
        </form>
    )
}

export default TodoForm