import React, { useState } from "react";
import TilesContainerPager from './TilesContainerPager';
import Search from './Search';
import AddTile from './AddTile';
import ButtonsContainer from './ButtonsContainer';
import { DataContextProvider } from '../context/DataProvider';

function AppContainer() {
    const [isSearching, setIsSearching] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    return (
        <DataContextProvider>
            <div className="app-container">
                <ButtonsContainer setIsSearching={setIsSearching} isSearching={isSearching} setIsAdding={setIsAdding} isAdding={isAdding}/>
                { !isSearching && !isAdding && <TilesContainerPager /> }
                { isSearching && <Search/> }
                {isAdding && <AddTile setIsAdding={setIsAdding} isAdding={isAdding} /> }
            </div>
        </DataContextProvider>
    )
}

export default AppContainer;