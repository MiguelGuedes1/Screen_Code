import { Outlet } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

//css

import './App.css'


function App() {
    return (
        <div className="App">
            <NavBar />
            <main className="App-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}


export default App
