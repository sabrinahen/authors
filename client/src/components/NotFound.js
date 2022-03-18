import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"

const NotFound = (props)=> {




    return(
        <div>
            <h3>"We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?"</h3>
            <Link to={"/authors/new"}><h5>Add New Author</h5></Link>
        </div>
    )

}

export default NotFound;