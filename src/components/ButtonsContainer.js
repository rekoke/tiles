import React from 'react'

const ButtonsContainer = ({isSearching, setIsSearching, setIsAdding, isAdding}) => {
    const backToGrid = () => {
        setIsAdding(false);
        setIsSearching(false);
    }
    return (
        <div className="buttonsContainer">
            {(isAdding || isSearching) && <button className="buttonsContainer__back" onClick= {() => backToGrid()}>← Back to grid</button>}
            {!isAdding && !isSearching && <button onClick= {() => setIsSearching(!isSearching)}>Search</button>}
            {!isSearching && !isAdding && <button onClick= {() => setIsAdding(!isAdding)}>Add</button> }
        </div>
    )
}

export default ButtonsContainer;