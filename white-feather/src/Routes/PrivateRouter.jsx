import React from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { useContext } from "react";
import { useNavigate,Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const navigate = useNavigate()
}

export default PrivateRouter