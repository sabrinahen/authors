import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"

const DisplayAllAuthors = (props)=> {

    const [authorList, setAuthorList] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setAuthorList(res.data)
            })
            .catch ((err)=>{
                console.log(err)
            })
    }, [])

    const deleteAuthor = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setAuthorList(authorList.filter(author => author._id !== idFromBelow))
            })
            .catch((err)=>{
                console.log(err)
            })
    }


    return(
        <div>
            <header>
                <h1>Favorite Authors</h1>
                <Link to="/authors/new"><h4>Add a New Author</h4></Link>
            </header>
            <table>
                <tr>
                    <th>Author Name</th>
                    <th>Actionable Items</th>
                </tr>
                {
                    authorList.map((author, index)=>(
                        <tr key={author._id}>
                                <td>{author.name}</td>
                                <td>
                                    <button><Link to={`/authors/edit/${author._id}`}>
                                    Edit </Link></button> | <button onClick={()=>deleteAuthor(author._id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )

}

export default DisplayAllAuthors;