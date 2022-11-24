import ReactDom from "react-dom"
import App from './basic/App9'

ReactDom.render(
   <App></App>, 
   document.getElementById('root')
)

// test hook useEffect "beforeDesotory" 销毁阶段 App6
// setTimeout(()=>{
//    ReactDom.render(
//       <input type="text"/>, 
//       document.getElementById('root')
//    )
//   },3000)