import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import { Teacher } from './teacher/teacher';

export default function App() {
  return (
      <BrowserRouter>
      <header>
          <h1>AtoG</h1>
                <NavLink>
                <menu className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="play">
                    Play
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="scores">
                    Scores
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="about">
                    About
                  </NavLink>
                </li>
              </menu>
            </NavLink>
      </header>

      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/play' element={<Play />} />
        <Route path='/scores' element={<Scores />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

        <footer>
            <span class="text-reset">Rebekah Evans</span>
            <NavLink to="https://github.com/Bek-ah/chess.git">Github Link</NavLink>
        </footer>
        </BrowserRouter>

  );
}
function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}