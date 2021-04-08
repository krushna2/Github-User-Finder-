import React, { useState,useContext } from 'react';
import GithubContext from "../../context/github/githubContext";

const Search= ({setAlert,searchUsers,showClear,clearUsers}) => {
    const githubContext = useContext(GithubContext);
    const [text,setText] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
        if(text === "")
        {
            setAlert("Please enter somthing..","success");
        }
        githubContext.searchUsers(text);//Passing props to parent component i.e props up
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
                {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}
            </div>
        )
}
export default Search;