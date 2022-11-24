import { useEffect, useState } from 'react'


//使用官方hook
// export default function App() {
//   // hook useState
//   const [msg,setMsg]  = useState("Hello World")
//   return (
//     <div>
//         <h2>{msg}</h2>
//         <button onClick={()=>setMsg('你好世界')}>按钮</button>
//     </div>
//   )
// }


// export default function App() {
//   // hook useEffect
//   const [num1, setNum1] = useState(1)
//   const [num2, setNum2] = useState(1)

//   // 模拟mounted,一般在这个位置写ajax
//   useEffect(() => {
//     console.log("挂载完成")
//   })

//   // 模拟updated
//   //检测全部，不加第二个参数或者加上全部参数数组
//   //检测一个，直接写变量数组
//   //检测零个，空数组就行
//   useEffect(() => {
//     console.log("num1更新了")
//   },[num1])

//   return (
//     <div>
//       <h2>{num1}</h2>
//       <button onClick={() => setNum1(num1 + 1)}>按钮1</button>
//       <hr></hr>
//       <h2>{num2}</h2>
//       <button onClick={() => setNum2(num2 + 1)}>按钮2</button>
//     </div>
//   )

// }

//模拟 beforeDesotory
export default function App() {
  const [msg,setMsg]  = useState("Hello World")
  
  //hook useEffect callback参数中再返回一个函数就行
  useEffect(()=>{
    return ()=>{
      console.log("销毁阶段")
    }
  })

  return (
    <div>
        <h2>{msg}</h2>
        <button onClick={()=>setMsg('你好世界')}>按钮</button>
    </div>
  )
}
