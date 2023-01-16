import React from 'react'

import imgHome from "../assets/images/image-home.png"
import imgCategories from "../assets/images/image-categories.png"

import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <Link to="/"><div className="Button" id="icon-home" ><img src={imgHome} width="50px"></img></div></Link>{" "}
            <Link to="/Principal"><div className="Button" id="icon-categories"><img src={imgCategories} width="50px"></img></div></Link>{" "}
        </div>
    )
}

export default Navbar