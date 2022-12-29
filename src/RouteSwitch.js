import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from './pages/Index.js';
import News from './pages/News.js';
import Class from './pages/Class.js';
import About from './pages/About.js';
import Admin from './pages/Admin.js';

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Index /> }></Route>
                <Route path="/Naujienos" element={ <News /> }></Route>
                <Route path="/Naujienos/:id" element={ <News /> }></Route>
                <Route path="/Klase" element={ <Class /> }></Route>
                <Route path="/Apie" element={ <About /> }></Route>
                <Route path="/Admin" element={ <Navigate to="/Admin/News"/> }></Route>
                <Route path="/Admin/News" element={ <Admin /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}