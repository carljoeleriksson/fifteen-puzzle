import React, { useEffect, useState } from 'react'
import Tile from './Tile'
import { NUM_TILES, NUM_ROWS, NUM_COLS } from '../utils/constants'


function Board() {
    //Set a state that holds an array of all tile indexes (keys)
    const [tiles, setTiles] = useState([...Array(NUM_TILES).keys()])
    const [isStarted, setIsStarted] = useState(false)
    const [gameWon, setGameWon] = useState(false)

    const boardStyle = {
        gridTemplateRows: `repeat(${NUM_ROWS}, 1fr)`,
        gridTemplateColumns: `repeat(${NUM_COLS}, 1fr)`,
    }


    function getGridPosition(index) {
        let gridPosition = {}
        gridPosition.row    = Math.floor(index / NUM_COLS)
        gridPosition.column = index % NUM_COLS

        return gridPosition
    }

    function canMove(clickedIndex) {
        //get what position in the grid that the tile is on.
        console.log('clickedIndex: ', clickedIndex);
        //Get the blank tile by it's index in the original array
        const blankTileIndex = tiles.indexOf(tiles.length - 1)
        console.log('blankTileIndex: ', blankTileIndex);
        
        const clickedGridPos = getGridPosition(clickedIndex)
        const blankGridPos = getGridPosition(blankTileIndex)
        console.log('clickedGridPos: ', clickedGridPos );
        console.log('blankGridPos: ', blankGridPos );

        
        if(clickedGridPos.row ===  blankGridPos.row) {
            console.log('canMove === true');
            return true
        } else if(clickedGridPos.column === blankGridPos.column) {
            console.log('canMove === true');
            return true
        } else {
            console.log('canMove === false');
            return false
        }
    }

    function swapTiles(newTilesArr, currentIndex, newIndex) {
        //Swap places of clickedIndex and blankTileIndex in newTilesArr 
        //using Destructuring assignment.
        [newTilesArr[currentIndex], newTilesArr[newIndex]] = 
        [newTilesArr[newIndex], newTilesArr[currentIndex]]
    }

    function moveTiles(tiles, clickedIndex, blankTileIndex) {
        //copy of tiles array
        const newTilesArr = [...tiles]
        //Find out if clickedIndex is in the same row or column 
        const clickedGridPos = getGridPosition(clickedIndex)
        console.log('clickedGridPos: ', clickedGridPos);
        const blankGridPos = getGridPosition(blankTileIndex)

        const isSameRow = Math.abs(clickedGridPos.row - blankGridPos.row) === 0
        const isSameCol = Math.abs(clickedGridPos.column - blankGridPos.column) === 0

        let modifier
        let numOfPlacesToMove
        let currentIndexPos = blankTileIndex

        if(isSameRow) {
            const positionDiff = clickedGridPos.column - blankGridPos.column
            modifier = positionDiff > 0 ? 1 : -1
            numOfPlacesToMove = Math.abs(positionDiff)

        } else if(isSameCol) {
            const positionDiff = clickedGridPos.row - blankGridPos.row
            modifier = positionDiff > 0 ? 1 : -1
            numOfPlacesToMove = Math.abs(positionDiff)
        }

        //for every numOfPlacesToMove 
        //move the blank tile one grid-step in the row/col that 
        //clickIndex is in.
        for (let i = 1; i <= numOfPlacesToMove; i++){

            //if isSameCol: 
            //sets newIndexPos to tile-to-be-moved:s index plus or 
            //minus NUM_COLS because thats how many places it needs to be 
            //moved to move up a row in the grid.

            //if isSameRow: 
            //sets newIndexPos to tile-to-be-moved:s index plus or 
            //minus one step (modifier).
            let newIndexPos = currentIndexPos+(isSameCol ? (NUM_COLS*modifier) : modifier)

            swapTiles(newTilesArr, currentIndexPos, newIndexPos)
            //sets the currentIndexPos to newIndexPos so that
            //we move the blank tile from the new position next iteration.
            currentIndexPos = newIndexPos;
        }

        setTiles(newTilesArr)
    }

    function renderTiles() {
        return tiles.map((tile, index) => (
            <Tile 
                key={tile}
                index={index}
                tile={tile}
                handleTileClick={handleTileClick}
            />    
            ))
        }

    function scrambleTiles() {
        let scrambledTilesArr = [...tiles]
        let randomIndex
        let currentIndex = scrambledTilesArr.length

        // While there remain elements to shuffle
        while (currentIndex != 0) {
            // Set randomIndex to a random Index
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And set current element-index to randomIndex
            [scrambledTilesArr[currentIndex], scrambledTilesArr[randomIndex]] = [
                scrambledTilesArr[randomIndex], scrambledTilesArr[currentIndex]];
        }

        setTiles(scrambledTilesArr)
    }

    function handleTileClick(clickedIndex) {    
        if(canMove(clickedIndex)) {
            const blankTileIndex = tiles.indexOf(tiles.length - 1)
            moveTiles(tiles, clickedIndex, blankTileIndex)
        }
    }

    function handleScrambleClick(){
        scrambleTiles()
        setIsStarted(true)
    }

    function winCheck() {
        if(isStarted) {
            let isSorted = true
            //checks if any index:s value in tiles is higher than 
            //the next index [i+1] value, and sets isSorted to false if it is.
            for (let i = 0; i < tiles.length - 1; i++) {
                if (tiles[i] > tiles[i+1]) {
                    isSorted = false
                    break;
                }
            }
            setGameWon(isSorted)
        }
    }

    useEffect(() => {
        renderTiles()
        winCheck()
    }, [tiles])

  return (<>
            <ul id="board" style={{...boardStyle}}>
                {tiles && renderTiles()}
            </ul>
            <button className='btn' onClick={handleScrambleClick}>
                {!isStarted ? 'Start' : 'Scramble Again'}
            </button>
            {gameWon && <h2>You solved it!<span>🤯🤓</span></h2>}
        </>
  )
}

export default Board