import { useForm } from '../hooks/useForm';

interface FormData {
    email: string;
    name: string;
    age: number;
}

const Formulario = () => {

    const { formulario, handleChange } = useForm<FormData>({
        email: '',
        name: 'Brandon Hernandez',
        age: 28
    })

    const { email, name, age } = formulario

    return (
        <>
            <form autoComplete="off"
                className="max-w-xl mx-auto">
                <div className="mb-7">
                    <label 
                        htmlFor="email"
                        className="inline-block font-bold uppercase mb-1 text-gray-800">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={ email }
                        onChange={ handleChange }
                        className="w-full rounded-lg text-lg px-5 py-2"
                        placeholder="correro@email.com" />
                </div>
                <div className="mb-7">
                    <label 
                        htmlFor="name"
                        className="inline-block font-bold uppercase mb-1 text-gray-800">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={ name }
                        onChange={ handleChange }
                        className="w-full rounded-lg text-lg px-5 py-2"
                        placeholder="Tu nombre" />
                </div>
                <div className="mb-7">
                    <label 
                        htmlFor="name"
                        className="inline-block font-bold uppercase mb-1 text-gray-800">Edad:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={ age }
                        onChange={ handleChange }
                        className="w-full rounded-lg text-lg px-5 py-2"
                        placeholder="28" />
                </div>
            </form>
            <div className="flex justify-center">
                <pre>{ JSON.stringify(formulario, null, 4) }</pre>
            </div>

        </>
    )
}

export default Formulario