import { React } from "react";

const InputSearch = (props) => {
    return (
        <div className="search-form">
        <label for="title" className="search-form__label">Title</label>
        <input
            type="input"
            className="search-form__field"
            placeholder="Name"
            name="name"
            id="name"
            onChange={(e) => props.setInputText(e.target.value)}
            value={props.inputText}
            required 
        />
        </div>
    );
}

export default InputSearch;