import { Routes, Route } from "react-router-dom"

import "./index.css"
import  "../src/assets/styles/Principal.css"
import "../src/assets/styles/Navbar.css"
import "../src/assets/styles/Home.css"
import "../src/assets/styles/Category.css"

import Navbar from "./components/Navbar.jsx"
import Home from "./assets/pages/Home.jsx"
import Principal from "./assets/pages/Principal.jsx"

import Category1 from "./assets/pages/Category1.jsx"
import Category2 from "./assets/pages/Category2.jsx"
import Category3 from "./assets/pages/Category3.jsx"
import Category4 from "./assets/pages/Category4.jsx"

import Productc1p1 from "./assets/pages/Productc1p1.jsx"
import Productc1p2 from "./assets/pages/Productc1p2.jsx"
import Productc1p3 from "./assets/pages/Productc1p3.jsx"
import Productc1p4 from "./assets/pages/Productc1p4.jsx"
import Productc2p1 from "./assets/pages/Productc2p1.jsx"
import Productc2p2 from "./assets/pages/Productc2p2.jsx"
import Productc2p3 from "./assets/pages/Productc2p3.jsx"
import Productc2p4 from "./assets/pages/Productc2p4.jsx"
import Productc3p1 from "./assets/pages/Productc3p1.jsx"
import Productc3p2 from "./assets/pages/Productc3p2.jsx"
import Productc3p3 from "./assets/pages/Productc3p3.jsx"
import Productc3p4 from "./assets/pages/Productc3p4.jsx"
import Productc4p1 from "./assets/pages/Productc4p1.jsx"
import Productc4p2 from "./assets/pages/Productc4p2.jsx"
import Productc4p3 from "./assets/pages/Productc4p3.jsx"
import Productc4p4 from "./assets/pages/Productc4p4.jsx"
import Purchase from "./assets/pages/Purchase.jsx"
import Summary from "./assets/pages/Summary.jsx"

function App(){
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Principal" element= { <Principal />}/>
          <Route path="Category1" element={<Category1 />}/>
          <Route path="Category2" element={<Category2 />}/>
          <Route path="Category3" element={<Category3 />}/>
          <Route path="Category4" element={<Category4 />}/>
          <Route path="Productc1p1" element={<Productc1p1 />}/>
          <Route path="Productc1p2" element={<Productc1p2 />}/>
          <Route path="Productc1p3" element={<Productc1p3 />}/>
          <Route path="Productc1p4" element={<Productc1p4 />}/>
          <Route path="Productc2p1" element={<Productc2p1 />}/>
          <Route path="Productc2p2" element={<Productc2p2 />}/>
          <Route path="Productc2p3" element={<Productc2p3 />}/>
          <Route path="Productc2p4" element={<Productc2p4 />}/>
          <Route path="Productc3p1" element={<Productc3p1 />}/>
          <Route path="Productc3p2" element={<Productc3p2 />}/>
          <Route path="Productc3p3" element={<Productc3p3 />}/>
          <Route path="Productc3p4" element={<Productc3p4 />}/>
          <Route path="Productc4p1" element={<Productc4p1 />}/>
          <Route path="Productc4p2" element={<Productc4p2 />}/>
          <Route path="Productc4p3" element={<Productc4p3 />}/>
          <Route path="Productc4p4" element={<Productc4p4 />}/>
          <Route path="Purchase" element={<Purchase />}/>
          <Route path="Summary" element={<Summary />}/>
      </Routes>
    </div>
  )
}

export default App
