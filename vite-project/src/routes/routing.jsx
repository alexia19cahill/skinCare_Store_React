

import { Routes,Route } from "react-router-dom"
import Register from '../pages/register'
import Login from '../pages/login'
import Home from "../pages/home"

function routing() {

   

  return (
    <div>
          
            <Routes>

                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
            </Routes>




        

    </div>
  )
}

export default routing