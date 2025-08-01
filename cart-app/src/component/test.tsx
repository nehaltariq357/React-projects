import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/CartContext'
const Test = () => {
const useing = useContext(cartContext)
  return (
    <div>Test
        <h1>checking: {useing}</h1>
    </div>
  )
}

export default Test