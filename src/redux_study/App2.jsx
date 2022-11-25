import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNum } from '../store/counterSlice'

export default function App2() {

    const num = useSelector((state) => state.counter.num)
    const dispatch = useDispatch()
    return (
        <>
            <div>数字是:{num}</div>
            <button onClick={() => dispatch(addNum())}>按钮</button>
        </>
    )

}
