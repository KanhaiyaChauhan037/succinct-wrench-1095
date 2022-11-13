import React from 'react'
import {Routes, Route} from "react-router-dom"
import AddProduct from './AddProduct'
import AllProduct from './AllProduct'
import Login from './Login'
import UpdateProduct from './UpdateProduct'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<AllProduct/>}></Route>
        <Route path='/add-product' element={<AddProduct/>}></Route>
        <Route path='/:id' element={<UpdateProduct/>}></Route>
        <Route path='/login' element={<Login/>}></Route>      
    </Routes>
  )
}
