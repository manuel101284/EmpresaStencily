import React from 'react'

import logo01 from "../images/image-logo.png"
import imgInfo from "../images/image-bidding.png"
import imgProduct from "../images/image-product.jpg"

import c1pin1 from "../images/pins/pin-c1-01.png"
import c1pin2 from "../images/pins/pin-c1-02.png"
import c1pin3 from "../images/pins/pin-c1-03.png"
import c1pin4 from "../images/pins/pin-c1-04.png"

import { Link } from "react-router-dom"

const Category1 = () => {
    return (
        <section className="category01">
            <div className="container01-01">
                <div className="container02-02">
                    <p id="name-enterprise1">STENCILY</p>
                    <img id="img-logo1" src={logo01} width="100%"></img>
                </div>

                <div className="container03-03">
                    {/* <p id="bidding">OFERTAS</p> */}
                    <img id="img-bidding1" src={imgInfo} width="80%"></img>
                </div>
            </div>

            <div className="container04-04" id="products">
                <Link to="/Productc1p1.jsx"><img className="product" id="pin-01" src={c1pin1} width="60%"></img></Link>{" "}
                <Link to="/Productc1p2.jsx"><img className="product" id="pin-02" src={c1pin2} width="60%"></img></Link>{" "}
                <Link to="/Productc1p3.jsx"><img className="product" id="pin-03" src={c1pin3} width="60%"></img></Link>{" "}
                <Link to="/Productc1p4.jsx"><img className="product" id="pin-04" src={c1pin4} width="60%"></img></Link>{" "}
            </div>
        </section>
    )
}

export default Category1