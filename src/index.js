import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from "react-redux"
import App from './pages/App1'
import store from './store/store'

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

root.render(
    <App />
)

// test hook useEffect "beforeDesotory" 销毁阶段 App6
// setTimeout(()=>{
//    ReactDom.render(
//       <input type="text"/>,
//       document.getElementById('root')
//    )
//   },3000)