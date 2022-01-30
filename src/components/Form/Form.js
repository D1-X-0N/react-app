import './Form.sass';
import React, {useState} from "react";


export const Form = ({onSubmit}) => {
    const [value, setValue] = useState(""); 
    const [author, setAuthor] = useState("");
    
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(author,value);
    }

    return (
        <form className="form"  onSubmit={handleSubmit}>
            <label>
                Author:
                <input className="form-input" name="author" author={author} type="text" onChange={handleChangeAuthor}></input>
            </label>
            <label>
                Message:
                <input className="form-input" name="message" value={value} type="text" onChange={handleChange}></input>
            </label>
            <input className="submit" type="submit"></input>
        </form>
    );   
};
