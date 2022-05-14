import { useState } from 'react';
import Timer from './Timer';


const TimerPadre = () => {

    const [ milisegundos, setMilisegundos ] = useState(1000)

    return (
        <>
            <div className="text-center">
                <span className="block">Milisegundos: { milisegundos }</span>
                <div className="flex justify-center gap-5 my-5">
                    <button 
                        onClick={ ()=> setMilisegundos(1000) }
                        className="rounded-lg bg-slate-800 text-gray-50 px-6 py-2 active:scale-95">
                        1000
                    </button>
                    <button
                        onClick={ ()=> setMilisegundos(2000) } 
                        className="rounded-lg bg-slate-800 text-gray-50 px-6 py-2 active:scale-95">
                        2000
                    </button>
                </div>
            </div>
            <Timer milisegundos={ milisegundos } />
        </>
    )
}

export default TimerPadre