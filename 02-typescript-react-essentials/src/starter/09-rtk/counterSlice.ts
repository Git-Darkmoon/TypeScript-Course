import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export enum CounterStatus {
  PENDING = "Pending...",
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}

type CounterState = {
  count: number
  status: CounterStatus
}

const initialState: CounterState = {
  count: 0,
  status: CounterStatus.PENDING,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    },
    setStatus: (state, action: PayloadAction<CounterStatus>) => {
      state.status = action.payload
    },
  },
})

export const { increment, decrement, reset, setStatus } = counterSlice.actions

export default counterSlice.reducer
