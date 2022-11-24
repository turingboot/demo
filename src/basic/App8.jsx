import React, { useRef, useState } from 'react'

//受控组件和不受控组件
export default function App8() {
    const [value, setValue]  = useState("dsad")
    const element  = useRef(null)

    const valueChange = (e)=>{
        setValue(e.target.value)
    }

    const printValue = ()=>{
        console.log(value)
    }

  return (
    <div>
      <h3>受控组件</h3>
        <input type="text"  value={value} onChange={valueChange}/>
        <button onClick={printValue}>按钮1 </button>
        <hr></hr>
        <h3>不受控组件</h3>
        <input type="text"  ref={element} />
        <button onClick={()=>console.log(element.current.value)}>按钮2 </button>
    </div>
  )
}

//受控组件和不受控组件只存在表单
//所谓受控组件就是表单元素的value需要通过state来定义
//不受控组件意味着表单元素的value无法通过state获取,只能用ref(useRef)来获取
 