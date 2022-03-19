import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom"

const EditAuthor = (props)=> {

    const [author, setAuthor] = useState("");
    const [name, setName] = useState("")

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then ((res)=> {
                console.log(res);
                console.log(res.data);
                setName(res.data.name)
                setAuthor(res.data)
            })
            .catch((err)=>{
                console.log(err)
                navigate("/error")
            })
    }, [id])

    const submitHandler = (e)=>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${id}`,
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
                console.log("err.response", err.response);
                console.log("err.response.data", err.response.data);
                console.log("err.response.data.errors", err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return(
        <div>
            <header>
                <h1>Favorite Authors</h1>
                <Link to="/"><h4>Home</h4></Link>
            </header>
            <h5>Edit {author.name}</h5>
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
                    {
                        errors.name?
                        <p>{errors.name.message}</p>
                        :null
                    }
                <button>Save Changes</button>
                <button><Link to="/">Cancel</Link></button>
            </form>
        </div>
    )

}

export default EditAuthor;