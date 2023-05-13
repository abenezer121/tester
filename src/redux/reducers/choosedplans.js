import { createSlice } from "@reduxjs/toolkit"


export const choosedPlanSlice = createSlice({
    name: "choosedPlanState",
    initialState: {

        choosed: []
    },
    reducers: {
        setChoosedPlan: (state, action) => {
         
            state.choosed = action.payload
        }
    }
})


export const { setChoosedPlan } = choosedPlanSlice.actions

export default choosedPlanSlice.reducer;