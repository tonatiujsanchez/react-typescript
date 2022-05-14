import UseState from './pages/UseState';
import UseEffectUseRef from './pages/UseEffectUseRef';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import UseReducer from './pages/UseReducer';



function App() {

    return (
        <>
            <BrowserRouter>
                <header className="py-10">
                    <h1 className="font-bold text-3xl text-center">🚀 React + Typescript ⚡</h1>
                    <nav className='flex justify-center gap-5 mt-5 mb-10'>
                        <NavLink 
                            to="/use-state"
                            className={({ isActive })=>`${isActive ? 'text-red-600 border-2 border-red-600 rounded-lg py-1 px-2': 'text-gray-400 border-2 border-transparent rounded-lg py-1 px-2'} font-semibold text-lg`}>useState</NavLink>
                        <NavLink 
                            to="/use-effect-ref"
                            className={({ isActive })=>`${isActive ? 'text-red-600 border-2 border-red-600 rounded-lg py-1 px-2': 'text-gray-400 border-2 border-transparent rounded-lg py-1 px-2'} font-semibold text-lg`}>useEffectRef</NavLink>
                        <NavLink 
                            to="/use-reducer"
                            className={({ isActive })=>`${isActive ? 'text-red-600 border-2 border-red-600 rounded-lg py-1 px-2': 'text-gray-400 border-2 border-transparent rounded-lg py-1 px-2'} font-semibold text-lg`}>UseReducer</NavLink>
                    </nav>
                </header>
                <main className="max-w-5xl mx-auto">
                        <Routes>
                            <Route path="*" element={ <Navigate replace to="use-state" /> } />
                            <Route path='use-state' element={ <UseState /> } />
                            <Route path='use-effect-ref' element={ <UseEffectUseRef />} />
                            <Route path='use-reducer' element={ <UseReducer />} />
                        </Routes>
                </main>
            </BrowserRouter>

        </>
    );
}

export default App;
