import React from 'react';
import { Link } from "react-router-dom";

export function Login() {
  return (
      <main>
          <h1>Welcome!</h1>
          <h2>Login</h2>
          <form method="get" action="play">
              <label for="name">Student:</label>
              <input type="text" id="name" placeholder="Your name here" />
              <button className="login-buttons"><Link className="links" to="play">Login</Link></button>
          </form>
          <button className="login-buttons"><Link className="links" to="play">Play</Link></button>
          <div></div>
          <button className="login-buttons"><Link className="links" to="about">Questions?</Link></button>
          <div>
              <form method="get" action="../teacher/teacher.html">
                  <label for="name">Teacher:</label>
                  <input id="ID" placeholder="Teacher ID here" type="text" />
                  <button className="login-buttons"><Link className="links" to="teacher">Login</Link></button>
              </form>
          </div>
      </main>
  );
}