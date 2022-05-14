import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
    milisegundos: number
}

const Timer = ( { milisegundos }: TimerArgs ) => {

    const [segundos, setSegundos] = useState(0)
    const ref = useRef<NodeJS.Timer>()

    useEffect(() => {
        
        ref.current && clearInterval( ref.current )
        
        ref.current = setInterval(() => {
            setSegundos( s => s + 1 )
        }, milisegundos)
        
        return ()=>{
            clearInterval( ref.current )
        }
    }, [milisegundos])

    return (
        <div className="text-center">
            <h4>Timer: <small>{segundos} segundos</small></h4>
        </div>
    )
}

export default Timer