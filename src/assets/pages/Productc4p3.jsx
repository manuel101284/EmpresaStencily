import React from 'react'

import PinProductc4p3 from "../images/pins/pin-c4-03.png"

import { Link } from 'react-router-dom'

const Productc4p3 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc4p3} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc4p3
