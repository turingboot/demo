import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {

  // /detail？id=456
  // useSearchParams获取456
  const [para] = useSearchParams()
  console.log(para.getAll('id')[0])
  return (
    <div>Detail</div>
  )
}
