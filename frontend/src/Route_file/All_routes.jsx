import React from 'react'

import Home from "../components/pages/Home";
import Register from "../components/pages/Register";
import Edit from "../components/pages/Edit";
import Profile from "../components/pages/Profile";
import { Routes, Route } from "react-router-dom"

function All_routes() {
  return (
	<div>
		  <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/userprofile/:id' element={<Profile />} />
      </Routes>
	</div>
  )
}

export default All_routes