import { React } from "react";

const InputSearch = (props) => {
    return (
        <div className="search-form">
        <label htmlFor="title" className="search-form__label">Title</label>
        <input
            type="text"
            className="search-form__field"
            placeholder="Title"
            name="title"
            id="title"
            onChange={(e) => props.setInputText(e.target.value)}
            value={props.inputText}
        />
        </div>
    );
}

export default InputSearch;