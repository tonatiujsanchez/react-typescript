import { useState } from "react"


const Counter = () => {

    const [counter, setCounter] = useState<number>(0)

    const increment = ( value: number = 1 ): void => {
        setCounter( c => c + value )
    }

    return (
        <div className="mt-16 text-center">
            <h3 className="font-semibold text-2xl">Counter: useState</h3>
            <div className="grid place-content-center h-16 w-36 border-2 border-gray-800 rounded-lg my-5 mx-auto">
                <span className="text-2xl font-medium">{ counter }</span>
            </div>
            <div className="flex justify-center gap-5 mt-3">
                <button
                    onClick={  () => increment( -2 ) } 
                    className="rounded-lg bg-slate-800 text-gray-50 px-6 py-2 active:scale-95">
                        Decrement -2
                </button>
                <button
                    onClick={  () => setCounter( 0 ) } 
                    className="rounded-lg bg-rose-800 text-gray-50 px-6 py-2 active:scale-95">
                        reset
                </button>
                <button
                    onClick={ () => increment( 1 ) } 
                    className="rounded-lg bg-slate-800 text-gray-50 px-6 py-2 active:scale-95">
                        Increment +1
                </button>
            </div>
        </div>
    )
}

export default Counter