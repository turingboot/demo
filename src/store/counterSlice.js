import { createSlice } from "@reduxjs/toolkit";


//counterSlices是@reduxjs/toolkit中为了方便redux写法的工具集合
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        num: 1
    },
    reducers: {
        addNum: (state) => {
            state.num++;
        }
    }

})

// Action creators are generated for each case reducer function
export const { addNum } = counterSlice.actions

export default counterSlice.reducer