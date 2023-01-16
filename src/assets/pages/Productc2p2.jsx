import React from 'react'

import PinProductc2p2 from "../images/pins/pin-c2-02.png"

import { Link } from 'react-router-dom'

const Productc2p2 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc2p2} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc2p2
