import { createSlice } from "@reduxjs/toolkit"


export const currentRouteSlice = createSlice({
    name: "currentRoute",
    initialState: {
        currentRoute: "Dashboard"
    },
    reducers: {
        setCurrentRoute: (state, action) => {

            
            state.currentRoute = action.payload
        }
    }
})


export const { setCurrentRoute } = currentRouteSlice.actions

export default currentRouteSlice.reducer;