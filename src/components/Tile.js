import React from "react";
import MyImage from "./MyImage";

const Tile = ({imagePath, description, title}) => {
    return(
        <div className="image-container">
            <MyImage 
                imagePath={imagePath}
                description={description}
            />
            <div className="image-container__info">
                <div className="image-container__info__title">
                    {title}
                </div>
                <div className="image-container__info__desc">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default Tile;