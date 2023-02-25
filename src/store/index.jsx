import { configureStore } from '@reduxjs/toolkit'
import mode from './slices/mode.slices'

export default configureStore({
    reducer: {
      mode
    }
})
