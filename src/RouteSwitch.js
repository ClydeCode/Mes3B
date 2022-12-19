import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index.js';
import News from './pages/News.js';
import Class from './pages/Class.js';
import About from './pages/About.js';

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />}></Route>
                <Route path="/Naujienos" element={<News />}></Route>
                <Route path="/Naujienos/:id" element={<News />}></Route>
                <Route path="/Klase" element={<Class />}></Route>
                <Route path="/Apie" element={<About />}></Route>
            </Routes>
        </BrowserRouter>
    )
}