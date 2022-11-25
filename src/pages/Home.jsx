import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Home() {

  //带参数的事件跳转
  const localtion = useLocation()

  return (
    <div>Home:{localtion.state ? localtion.state.index : ""}</div>
  )
}
