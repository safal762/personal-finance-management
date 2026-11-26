import { createSlice,nanoid } from "@reduxjs/toolkit"
const initialState={
    todo:[
        {
            id:1,
            todo:'todo',
            completed:false
        },
    ]
}

const financeSlice=createSlice({
    name:'finance',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.id=nanoid(),
            state.todo=action.payload,
            state.completed=true
        },
        editTodo:(state,action)=>{},
        deleteTodo:(state,action)=>{}
    }
})

export const{addTodo,editTodo,deleteTodo}= financeSlice.action
export default financeSlice.reducer