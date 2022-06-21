import { React, useState } from "react";
import useData from '../hooks/useData';

const BUTTON_STATES = {
    ADD: "Add",
    LOADING: "Loading",
    DONE: "Done"
};

const FormAddTile = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [buttonStatus, setbuttonStatus] = useState(BUTTON_STATES.ADD);
    const {setData} = useData();

    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms));

    const handleSubmit = async(e) => {
        try{
            e.preventDefault();
            setbuttonStatus(BUTTON_STATES.LOADING);
            setData(data => [...data, {title: title, description: description, imagePath: imagePath}]);
            await sleep(2000);
            setbuttonStatus(BUTTON_STATES.DONE);
            await sleep(2000);
            setTitle('');
            setDescription('');
            setImagePath('');
            setbuttonStatus(BUTTON_STATES.ADD);
        } catch (err) {
            throw new Error("error.unknown");
        }
    }

    return (
        <form className="formAddTile" onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="title">Title</label>
                <input
                    placeholder="Title"
                    type="text"
                    id="title"
                    autoComplete="off"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="description">Description</label>
                <input
                    placeholder="Description"
                    type="text"
                    id="description"
                    autoComplete="off"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="imagePath">Image Path</label>
                <input
                    placeholder="Image Path"
                    type="url"
                    id="imagePath"
                    autoComplete="off"
                    onChange={(e) => setImagePath(e.target.value)}
                    value={imagePath}
                    required
                />
            </div>
            <button disabled={!title || !description|| !imagePath} name="add-tile">
                {buttonStatus === BUTTON_STATES.ADD && <span className="button-inside">Add</span>}
                {buttonStatus === BUTTON_STATES.LOADING && <span className="button-inside"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></span>}
                {buttonStatus === BUTTON_STATES.DONE && <span className="button-inside">Added!</span>}
            </button>
        </form>
    )
}

export default FormAddTile;