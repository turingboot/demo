import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Home() {

  
  const localtion = useLocation()

  return (
    <div>Home:{localtion.state?localtion.state.index:""}</div>
  )
}
