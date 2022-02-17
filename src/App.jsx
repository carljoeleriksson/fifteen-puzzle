import React from 'react'
import './App.css'

import Board from './components/Board'

function App() {
    

    return (
        <div className="App">
            <header><h1>15 Puzzle</h1></header>
            <main>
                <Board />
            </main>
        </div>
    )
}

export default App
