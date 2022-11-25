
//仓库入口文件
//引入reducer
import { createStore } from 'react-redux'
import reducer from './reducer'
//创建仓库
const store = createStore(reducer)
//导出仓库
export default store;