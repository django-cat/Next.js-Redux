import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"
import { createWrapper } from "next-redux-wrapper"

const store = configureStore({
  reducer: rootReducer
})

const createStore = () => store

const wrapper = createWrapper(createStore)

export type RootState = ReturnType<typeof store.getState>
export default wrapper