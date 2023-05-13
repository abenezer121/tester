import { createSlice } from "@reduxjs/toolkit"


export const planSlice = createSlice({
    name: "planSliceState",
    initialState: {

        plan: []
    },
    reducers: {
        setPlan: (state, action) => {
         
            state.plan = action.payload
        }
    }
})


export const { setPlan } = planSlice.actions

export default planSlice.reducer;