import React, { createContext, useContext, useState } from 'react'


//组件传值
//父传子
// export default function App7() {
//     return (
//       <Father  num={789}/>
//     )
//   } 

// function Father(props){
//     return <Child num={props.num}/>
// }

// function Child(props){
//       return(
//         <>
//         <h2>子组件 - {props.num}</h2>
//         <button>修改num</button>
//         </>
//       )

// }

//子传父
// pass

//组件传值
//创建上下文空间
// const NumContext = createContext()
// export default function App7() {

//   const [num, setNum] = useState(123)


//   return (
//     <NumContext.Provider value={{ num, setNum }}>
//       <Father />
//     </NumContext.Provider>
//   )
// }

// function Father() {
//   return <Child />
// }

// function Child() {
//   return (
//     <NumContext.Consumer>
//       {
//         ({ num, setNum }) => (
//           (
//             <>
//               <h2>子组件 - {num}</h2>
//               <button onClick={() => setNum(456)}>修改num</button>
//             </>
//           )
//         )
//       }
//     </NumContext.Consumer>
//   )
// }



//组件传值
//useContext
const NumContext = createContext()
export default function App7() {
  const [num, setNum] = useState(123)
  
  return (
    <NumContext.Provider value={{ num, setNum }}>
      <Father />
    </NumContext.Provider>
  )
}

function Father() {
  return <Child />
}

function Child() {
  const { num, setNum } = useContext(NumContext)
  return (
    <>
      <h2>子组件 - {num}</h2>
      <button onClick={() => setNum(456)}>修改num</button>
    </>
  )
}