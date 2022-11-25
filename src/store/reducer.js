
//创建初始状态，并导出一个函数
const defaultState = {
    num:1
}

export default (state=defaultState,action) => {
    let newState = JSON.parse(JSON.stringify(state))
    if(action.type==="addNum"){
        newState.num++;
    }
    return newState;
}