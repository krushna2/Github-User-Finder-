import React, { useState } from 'react';
import PropTypes from "prop-types";

const Search= ({setAlert,searchUsers,showClear,clearUsers}) => {
    const [text,setText] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
        if(text === "")
        {
            setAlert("Please enter somthing..","success");
        }
        searchUsers(text);//Passing props to parent component i.e props up
        setText("");
    }

    const onChange = (e) =>{
        setText(e.target.value);
    }

        return(
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search User Here .." value={text} onChange={onChange}/>
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
            </div>
        )
}
Search.propTypes = {
    searchUsers:PropTypes.func.isRequired,
    clearUsers:PropTypes.func.isRequired,
    setAlert:PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired
}

export default Search;