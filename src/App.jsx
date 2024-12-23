import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Schedule from './components/Schedule';
import CreateTodo from './components/CreateTodo';
import Home from './components/Home'
import Footer from './components/Footer'
function App() {
    return (
        <>
            <BrowserRouter> {/* Wrap the entire component tree */}
            <Nav />
           
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path="/create-todo" element={<CreateTodo />} />
                    <Route path="/set-schedule" element={<Schedule />} /> {/* Corrected the typo */}
                </Routes>
            </BrowserRouter>
            <Footer/>
            
        </>
    );
}

export default App;
