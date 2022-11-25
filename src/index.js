import ReactDom from "react-dom"
import { Provider } from "react-redux"
import App from './redux_study/App1'
import store from './store'

ReactDom.render(
   <Provider store={store}>
      <App/>
   </Provider>,
   document.getElementById('root')
)

// test hook useEffect "beforeDesotory" 销毁阶段 App6
// setTimeout(()=>{
//    ReactDom.render(
//       <input type="text"/>,
//       document.getElementById('root')
//    )
//   },3000)