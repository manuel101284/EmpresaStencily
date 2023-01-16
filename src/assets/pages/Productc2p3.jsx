import React from 'react'

import PinProductc2p3 from "../images/pins/pin-c2-03.png"

import { Link } from 'react-router-dom'

const Productc2p3 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc2p3} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc2p3
