import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    expense: [
        {
            id: 1,
            title: 'expense',
            amount: 0,
            catogery: 'c1',
            date: 1,
            description: 'hello'
        }
    ]
}


const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addexpense: (state, action) => {
            state.expense.push(
               { 
                id:nanoid(),
                date:new Date().getMonth(),
                ...action.payload
            }
            )
        },
        deleteExpense: (state, action) => {
            state.expense = state.expense.filter((item) => {
                return state.id != action.payload.id
            })
        }
    }
})

export const { addexpense, deleteExpense } = expenseSlice.actions
export default expenseSlice.reducer