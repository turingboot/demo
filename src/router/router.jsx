

import App from '../pages/App1'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import List from '../pages/List'
import Error from '../pages/Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//定义路由
const BaseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App></App>}>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/detail" element={<Detail />}></Route>
                <Route path="/list/:id" element={<List />}></Route>
            </Route>
            {/* 404页面的处理 */}
            <Route path="*" element={<Error />}></Route>
        </Routes>

    </BrowserRouter>
)

export default BaseRouter;