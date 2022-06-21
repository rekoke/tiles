import React from "react";
import useData from "../hooks/useData";
import Tile from "./Tile";

function SearchResults(props) {
    const {data} = useData();
    
    const filteredData = data?.filter((el) => {
        if (props.inputText === "") {
            return el;
        } else {
            return el.title.toLowerCase().includes(props.inputText)
        }
    })

    return (
        <>
            { filteredData?.length > 0 ? 
                <ul className="searchResults">
                    {props.inputText && filteredData.map((item, index) => (
                        <li className="searchResults__item" key={index}>
                            <Tile
                                key= {index}
                                imagePath={item.imagePath}
                                description={item.description}
                            />
                        </li>
                    ))}
                </ul> : <span className="no-results" id="noResults"><span>OOOPS...</span>NO RESULTS FOR YOUR SEARCH</span>
            }
        </>
    )
}

export default SearchResults;