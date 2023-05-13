import { createSlice } from "@reduxjs/toolkit"


export const sideBarSlice = createSlice({
    name: "sideBarState",
    initialState: {
        open: true
    },
    reducers: {
        setSideBar: (state, action) => {

            
            state.open = action.payload
        }
    }
})


export const { setSideBar } = sideBarSlice.actions

export default sideBarSlice.reducer;