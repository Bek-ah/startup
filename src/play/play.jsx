import React from 'react';
import { Link } from "react-router-dom";

export function Play() {
  return (
     <main>
        <img src="../../public/treble_clef.jpg" width="302" height="228" alt="A treble clef"/>
        <div></div>
        <button className="login-buttons"><Link className="links" to="../scores">Stop</Link></button>
        <div></div>
        <button className="login-buttons"><Link className="links" to="../about">About</Link></button>
        <div></div>
            <div class="users">
                <span class="player-name">IDK Student</span>
            </div>
            <div>
                <label for="count">Accuracy</label>
                <input type="text" id="count" value="--" readOnly/>
            </div>
            <div class="letterlist">
            <div class="letters">
                <button>
                    <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40"
                            stroke="black" stroke-width="4" fill="white" />
                    <text x="50%" y="50%"
                          text-anchor="middle" fill="black" font-size="20"
                          dominant-baseline="middle">A</text>
                    Error
                    </svg>
                </button>
            </div>
            <div class="letters">
                <button>
                    <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40"
                            stroke="black" stroke-width="4" fill="white" />
                    <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="20" dominant-baseline="middle">B</text>
                    Error
                    </svg>
                </button>
            </div>
            <div class="letters">
            <button>
                <svg width="100" height="100">
                <circle cx="50" cy="50" r="40"
                        stroke="black" stroke-width="4" fill="white" />
                <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="20" dominant-baseline="middle">C</text>
                Error
            </svg>
            </button>
            </div>
            <div class="letters">
            <button>
                <svg width="100" height="100">
                <circle cx="50" cy="50" r="40"
                        stroke="black" stroke-width="4" fill="white" />
                <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="20"
                      dominant-baseline="middle">D</text>
                Error
            </svg>
            </button>
            </div>
            <div class="letters">
            <button>
                <svg width="100" height="100">
                <circle cx="50" cy="50" r="40"
                        stroke="black" stroke-width="4" fill="white" />
                <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="20" dominant-baseline="middle">E</text>
                Error
            </svg>
            </button>
            </div>
            <div class="letters">
            <button>
                <svg width="100" height="100">
                <circle cx="50" cy="50" r="40"
                        stroke="black" stroke-width="4" fill="white" />
                <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="20"
                      dominant-baseline="middle">F</text>
                Error
            </svg>
            </button>
            </div>
            <div class="letters">
            <button>
                <svg width="100" height="100">
                <circle cx="50" cy="50" r="40"
                        stroke="black" stroke-width="4" fill="white" />
                <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="20" dominant-baseline="middle">G</text>
                Error
            </svg>
            </button>
            </div>
            </div>
       </main>
  );
}