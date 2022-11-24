import React, { useState, memo, useCallback, useMemo } from 'react'

export default function App9() {

    const [num, setNum] = useState(123)
    //更新操作放到父级，子组件就不会跟随更新
    const doSth = useCallback(() => {
        setNum(num => num + 1)
    }, [])
    const tmp_ = doSth

    const doSth_memo = useMemo(() => {
        return () => setNum((num) => num + 1)
    }, [])

    return (
        <div>
            <h3>数字为：{num}</h3>
            {/* <button onClick={() => setNum(num + 1)}>按钮</button> */}
            {/* 不加memo的Child组件，会随着父组件更新而更新 */}
            <Child doSth_memo={doSth_memo}></Child>
        </div>
    )
}

// 加上memo的Child组件，不会随着父组件更新而更新
// 适用于子组件是纯静态的情况
const Child = memo((props) => {
    console.log(123)
    return <button onClick={() => props.doSth_memo()}>子组件</button>
})