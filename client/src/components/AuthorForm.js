import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"

const AuthorForm = (props)=> {

    const [name, setName] = useState("");

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/authors",
        {
            name
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/")
        })
        .catch ((err)=>{
            console.log(err);
            // console.log("err.response", err.response);
            // console.log("err.response.data", err.response.data);
            // console.log("err.response.data.errors", err.response.data.errors);
            // setErrors(err.response.data.errors);
        })
    }

    return(
        <div>
            <header>
                <h1>Favorite Authors</h1>
                <Link to="/"><h4>Home</h4></Link>
            </header>
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
                    {
                        errors.name?
                        <p>{errors.name.message}</p>
                        :null
                    }
                <button>Submit</button>
                <button><Link to="/">Cancel</Link></button>
            </form>
        </div>
    )

}

export default AuthorForm;