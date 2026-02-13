import React from 'react';
import { Link } from "react-router-dom";

export function Scores() {
  return (
    <main>
    <h2>Scores</h2>
    <p>Accuracy: </p> <p>80%</p>
    <div>
        <p id="encouragement-api">You're Amazing API!</p>
    </div>
    <button className="login-buttons"><Link className="links" to="../">Log Out</Link></button>
    <div></div>
    <div></div>
    <button className="login-buttons"><Link className="links" to="../">Submit</Link></button>
    <div></div>
        <div></div>
    <button className="login-buttons"><Link className="links" to="../play">Again!</Link></button>
    <div></div>
    <div></div>
    <button className="login-buttons"><Link className="links" to="../about">Questions?</Link></button>
    </main>

  );
}