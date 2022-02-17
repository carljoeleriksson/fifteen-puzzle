import React, { useState } from 'react'
import Tile from './Tile'
import { NUM_TILES, GRID_SIZE, BOARD_SIZE } from '../utils/constants'


function Board() {
    //Set a state that holds an array of all tile indexes (keys)
    const [tiles, setTiles] = useState<number[]>([...Array(NUM_TILES).keys()])
    console.log('tilesIndex: ', tilesIndex);
    
  return (<>
    <ul id="board">
        {tiles.map((((tile:number), (index:number)) => (

        ))))}
        <Tile 
            key={tile}
            index={index}
            tile={tile}
            handleTielClick={handleTileClick}
        />
    </ul>
  
  </>
  )
}

export default Board