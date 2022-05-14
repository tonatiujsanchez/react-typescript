import Counter from "./components/Counter";
import Usuario from "./components/Usuario";



function App() {



    return (
        <>
            <header className="py-10">
                <h1 className="font-bold text-3xl text-center">🚀 React + Typescript ⚡</h1>
            </header>
            <main className="max-w-5xl mx-auto">
            <Counter />
            <Usuario />
            </main>

        </>
    );
}

export default App;
