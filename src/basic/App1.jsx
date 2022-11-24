import React from "react"

const msg = "你好世界"
let arr =  ["刘备","关羽","张飞"]
class App extends React.Component {

    render(){
        return(
            <div>
                <h2>{msg}</h2>
                <hr></hr>
                <label htmlFor="username">用户名</label>
                <input type="text" id="username"></input>
                <hr></hr>

                <div className="box"></div>
                <hr></hr>
                <div style={{backgroundColor:'blue'}}>内容内容</div>
                <hr></hr>

                {
                    arr.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </div>
        )
    }
}

export default App