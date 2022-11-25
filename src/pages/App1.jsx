import React from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
export default function App1() {

    const localtion = useLocation()
    console.log(localtion.pathname)

    const navigate = useNavigate()
    const goDetail = (href) => {
        navigate('/detail')
    }

    const goHome = (href) => {
        navigate('/home', {
            state: { index: 1 }
        })
    }
    return (
        <>
            <div>Router App1</div>
            <ul><Link to="/home">Home</Link></ul>
            <ul><Link to="/list/123">List</Link></ul>
            <ul><Link to="/detail?id=456">Detail</Link></ul>
            <hr />
            <button onClick={goHome}>跳转--home</button>
            <button onClick={goDetail}>跳转--list</button>
          
            {/* <button onClick={goPage}>跳转--detail</button>  */}
            <hr />
            <Outlet />
        </>
    )
}
