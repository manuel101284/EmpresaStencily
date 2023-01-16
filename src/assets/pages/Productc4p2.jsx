import React from 'react'

import PinProductc4p2 from "../images/pins/pin-c4-02.png"

import { Link } from 'react-router-dom'

const Productc4p2 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc4p2} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc4p2
