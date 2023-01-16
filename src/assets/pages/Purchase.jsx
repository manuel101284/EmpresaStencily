import React from 'react'

import Pin from "../images/image-product.jpg"

import { Link } from 'react-router-dom'

const Purchase = () => {
    return (
        <div className="purchase">
            <img id="pin-purchase" src={Pin}></img>

            <div className="pin-description">
                <div className="section01">
                    <h1 id="name-product">PRODUCTO</h1>
                    <h1 id="price-product">$99999</h1>
                </div>
                
                <div className="section02">
                    <p id="code-product">Código</p>
                    <p id="dimensions-product">Dimensiones</p>
                </div>

                <div className="section03">
                    <h2 id="description-product">Descripción</h2>
                    <p id="text-product">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <div className="section04">
                <p>Cantidad <input></input></p>
                <p>Total <input></input></p>
            </div>

            <Link to="/src/assets/pages/Summary.jsx"><div className="go-to-pay">Ir a Pagar</div></Link>
        </div>
    )
}

export default Purchase