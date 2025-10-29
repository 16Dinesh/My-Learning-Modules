import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Product = () => {

    const par = useParams()
    console.log(par);
    const {id } = par

    
  return (
    <div> 
        <h1>Product Page - id {id} </h1>

    </div>
  )
}

export default Product