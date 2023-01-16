import React from 'react'

import PinProductc1p3 from "../images/pins/pin-c1-03.png"

import { Link } from 'react-router-dom'

const Productc1p3 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc1p3} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc1p3
