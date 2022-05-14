import { useState } from 'react';
import { User } from '../interfaces/user.interface';



const Usuario = () => {
    const [user, setUser] = useState<User>()

    const login = ():void => {
        setUser({
            uid: '123',
            name: 'Brandon Hernandez'
        })
    }

    return (
        <div className='mt-16 flex justify-center flex-col items-center'>
            <h3 className='font-semibold text-2xl mb-5'>Usuario: useState</h3>
            <button
                onClick={ login } 
                className="rounded-lg bg-slate-800 text-gray-50 px-6 py-2 active:scale-95 mb-5">
                Login
            </button>
            { !user
                ? <code>No hay usuario</code>   
                : <pre>{ JSON.stringify( user, null, 4 ) }</pre>
            }
        </div>
    )
}

export default Usuario