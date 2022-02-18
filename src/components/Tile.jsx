import React from 'react'
import { NUM_TILES } from '../utils/constants'


//maybe use npm react-motion for animation smoothness?

function Tile(props) {
    const {tile, index, handleTileClick} = props

  return (<>
        <li 
            style={{opacity: tile === NUM_TILES - 1 ? 0 : 1 }}
            className="tile"
            onClick={() => handleTileClick(index)}
        >
            { tile + 1 }
        </li>
  </>

  )
}

export default Tile