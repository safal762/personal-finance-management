import {configureStore} from '@reduxjs/toolkit'
import incomeSlice from './income'
import expenseSlice from './expense'
export const financeStore = configureStore({
    reducer:{
        income:incomeSlice,
        expense:expenseSlice
    }
})