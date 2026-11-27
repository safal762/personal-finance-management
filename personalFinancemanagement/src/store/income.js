import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    income: [
        {
            id: 1,
            title: 'income',
            amount: 0,
            catogery: 'c1',
            date: 1,
            description: 'hello'
        }
    ]
}

const incomeSlice = createSlice({
    name: 'income',
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            state.income.push({
        id: nanoid(),
        date: new Date().getMonth(),
        ...action.payload
    })
        },
        deleteTransaction: (state, action) => {
            state.income = state.income.filter((item) => {
                return item.id != action.payload.id
            })
        }
    }
})

export const { addTransaction, deleteTransaction } = incomeSlice.actions
export default incomeSlice.reducer