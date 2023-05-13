import { createSlice } from "@reduxjs/toolkit"


export const metricsSlice = createSlice({
    name: "metric",
    initialState: {
        metrics: {
             "tss": 0,
            "matrix": 0,
            "direction": 0,
            "onm": 0
        }
    },
    reducers: {
        setMetrics: (state, action) => {

            
            state.metrics = action.payload
        }
    }
})


export const { setMetrics } = metricsSlice.actions

export default metricsSlice.reducer;