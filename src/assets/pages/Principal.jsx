import React from 'react'

import logo01 from "../images/image-logo.png"
import imgInfo from  "../images/image-bidding.png"
import imgProduct from "../images/image-product.jpg"
import category01 from "../images/category-1.svg"
import category02 from "../images/category-2.svg"
import category03 from "../images/category-3.svg"
import category04 from "../images/category-4.svg"

import { Link } from "react-router-dom"

const Principal = () => {
    return (
        <section className="principal01">
            <div className="container01">
                <div className="container02">
                    <p id="name-enterprise">STENCILY</p>
                    <img id="img-logo" src={logo01} width="100%"></img>
                </div>

                <div className="container03">
                    {/* <p id="bidding">OFERTAS</p> */}
                    <img id="img-bidding" src={imgInfo} width="80%"></img>
                </div>
            </div>

            <div className="container04" id="categories">
                <Link to="/Category1"><img className="product-category" id="category01" src={category01} width="60%"></img></Link>{" "}
                <Link to="/Category2"><img className="product-category" id="category02" src={category02} width="60%"></img></Link>{" "}
                <Link to="/Category3"><img className="product-category" id="category03" src={category03} width="60%"></img></Link>{" "}
                <Link to="/Category4"><img className="product-category" id="category04" src={category04} width="60%"></img></Link>{" "}
            </div>
        </section>
    )
}

export default Principal
