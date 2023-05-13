import { createSlice } from "@reduxjs/toolkit"


export const billingSlice = createSlice({
    name: "billingState",
    initialState: {

        billing: []
    },
    reducers: {
        setBilling: (state, action) => {
        
            state.billing = action.payload
        }
    }
})


export const { setBilling } = billingSlice.actions

export default billingSlice.reducer;