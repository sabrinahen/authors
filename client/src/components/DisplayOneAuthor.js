// import React, {useEffect, useState} from "react";
// import axios from "axios";
// import {Link, useNavigate, useParams} from "react-router-dom"

// const DisplayOneAuthor = (props)=> {

//     const [author, setAuthor] = useState({});

//     const {id} = useParams();

//     const navigate = useNavigate();

//     useEffect(()=>{
//         axios.get(`http://localhost:8000/api/authors/${id}`)
//             .then ((res)=> {
//                 console.log(res);
//                 console.log(res.data);
//                 setAuthor(res.data)
//             })
//             .catch((err)=>{
//                 console.log(err)
//             })
//     }, [id])

//     const deleteOneAuthor = ()=>{
//         axios.delete(`http://localhost:8000/api/authors/${id}`)
//             .then((res)=>{
//                 console.log(res);
//                 console.log(res.data);
//                 navigate("/")
//             })
//             .catch((err)=>{
//                 console.log(err)
//             })
//     }


//     return(
//         <div>
//             <header>
//                 <h1>Favorite Authors</h1>
//                 <Link to="/"><h4>Home</h4></Link>
//             </header>
//             <h4>Edit this author:</h4>
//             <p>Name: {author.name}</p>
//         </div>
//     )

// }

// export default DisplayOneAuthor;