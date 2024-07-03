

import { Routes,Route } from "react-router-dom"
import Register from '../pages/register'
import Login from '../pages/login'
import Home from "../pages/home"
import About from "../pages/about"
import Offers from "../pages/offers"
import Products from "../components/products"

function routing() {

   

  return (
    <div>

            <Routes>

                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
                 <Route path='/about' element={<About />}/>
                 <Route path='/offers' element={<Offers />}/>
                 <Route path='/products' element={<Products/>}/>
                 <Route path='/produpost' element={<Products/>}/>
                 
            </Routes>




        

    </div>
  )
}

export default routing