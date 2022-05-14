import { useReducer } from "react"


const initialState = {
    contador: 10
}

type ActionTypes = 
    | { type: 'increment' } 
    | { type: 'decrement' }
    | { type: 'custom', payload: number }

const contadorReducer = (state: typeof initialState, action: ActionTypes) => {

    switch (action.type) {
        case 'increment':
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'decrement':
            return {
                ...state,
                contador: state.contador - 1
            }
        case 'custom':
            return {
                ...state,
                contador: action.payload
            }

        default:
            return state;
    }
}




const ContadorRed = () => {

    const [{ contador }, dispatch] = useReducer(contadorReducer, initialState)

    const increment = () => {
        dispatch({
            type: "increment"
        })
    }

    const decrement = () => {
        dispatch({
            type: "decrement"
        })
    }

    const custom = () => {
        dispatch({
            type: "custom",
            payload: 100
        })
    }



    return (
        <div className="text-center">
            <h2 className="text-2xl font-semibold">Contador: { contador }</h2>
            <div className="mt-5 flex justify-center gap-3">
                <button
                    onClick={ decrement }
                    className="rounded-lg bg-slate-800 text-gray-50 px-6 py-2 active:scale-[0.98]">
                    Decrementar -1
                </button>
                <button
                    onClick={ increment }
                    className="rounded-lg bg-slate-800 text-gray-50 px-6 py-2 active:scale-[0.98]">
                    Increment +1
                </button>
                <button
                    onClick={ custom }
                    className="rounded-lg bg-sky-600 text-gray-50 px-6 py-2 active:scale-[0.98]">
                    100
                </button>
            </div>
        </div>
    )
}

export default ContadorRed