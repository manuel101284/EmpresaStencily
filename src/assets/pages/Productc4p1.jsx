import React from 'react'

import PinProductc4p1 from "../images/pins/pin-c4-01.png"

import { Link } from 'react-router-dom'

const Productc4p1 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc4p1} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc4p1
