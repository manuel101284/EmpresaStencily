import React from 'react'

import PinProductc3p3 from "../images/pins/pin-c3-03.png"

import { Link } from 'react-router-dom'

const Productc3p3 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc3p3} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc3p3
