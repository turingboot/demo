import React from 'react'
import {useParams} from 'react-router-dom'
export default function List() {
  

  // /list/123
  // useParams()获取123
  const {id} = useParams()
  console.log(id)
  return (
    <div>List</div>
  )
}
