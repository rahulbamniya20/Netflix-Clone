
import './App.css';


import Nav from "./components/Nav"
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from './pages/Body';
import SingleMovie from './pages/SingleMovie';
import Movie from './nav-pages/Movie';
import TV from './nav-pages/TV';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/tv" element={<TV />} />

          <Route path="/:type/:movieId" element={<SingleMovie />} />


        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
