import { React, useState } from "react";
import SearchResults from "./SearchResults";
import InputSearch from "./InputSearch";

const Search = () => {
    const [inputText, setInputText] = useState("");
    return (
        <div className="search-container -container">
            <h2 className="section-title">Search Tile</h2>
            <InputSearch setInputText={setInputText} inputText={inputText}/>
            <SearchResults inputText={inputText}/>
        </div>
    )
}

export default Search;