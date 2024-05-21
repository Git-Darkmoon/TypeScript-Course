import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type CounterStatus = "pending..." | "active" | "inactive"

enum CounterState {
  Pending = "pending...",
  Active = "active",
  Inactive = "inactive",
}

type CounterState = {
  count: number
  status: CounterState
}

const initialState: CounterState = {
  count: 0,
  status: "pending...",
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
})

export default counterSlice.reducer
