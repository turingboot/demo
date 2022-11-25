import React from 'react'
import { connect } from 'react-redux'

 function App1(props) {
  return (
    <>
    <div>数字是:{props.num}</div>
     <button onClick={()=>props.leijia()}>按钮</button>
    </>
    
  )
}

//状态映射 将reducer中的state 映射成props，让开发者可以在组件中使用
//props.value去调用state中的值
const mapStateToProps = (state)=>{
  return {
    num: state.num
  }
}

const mapDispatcherToProps = (dispatch)=>{
  return {
     leijia(){
      const action = {type:"addNum"}
      dispatch(action)
     }
  }
}

//事件派发映射： 将reducer中的事件 映射成props，让开发者可以在组件中调用action

export default connect(mapStateToProps,mapDispatcherToProps)(App1)