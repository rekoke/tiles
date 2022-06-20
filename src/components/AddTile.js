import { React } from "react";
import FormAddTile from "./FormAddTile";


const AddTile = ({isAdding}) => {
    return (
        <div className="add-container -container">
            <h2 className="section-title">Add Tile</h2>
            {isAdding && <FormAddTile />}
        </div>
    )
}

export default AddTile;