import React from 'react'

import PinProductc1p1 from "../images/pins/pin-c1-01.png"

import { Link } from 'react-router-dom'

const Productc1p1 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc1p1} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc1p1
