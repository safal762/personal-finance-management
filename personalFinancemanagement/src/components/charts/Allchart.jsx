
import React, { use } from 'react'
import {LineChart,CartesianGrid, Line, XAxis, YAxis, Legend} from 'recharts'
import {useSelector} from 'react-redux'
function Allchart() {
  const incomeData=useSelector((state)=>state.income.income)
  const expenseData=useSelector((state)=>state.expense.expense)
const data = incomeData.map((item) => {  //combining both data object into one object
  return {
    month: item.date,
    income: item.amount,

    expenses: expenseData.find((expense) => {
      return expense.date=== item.date
    })?.amount || 0 
  }
})

console.log(data)
  return (
  <div>
 <LineChart 
 style={
  {
    width:"100%",
    aspectRatio:"1.682",
    maxWidth:600
  }
 }
 responsive
 data={data}
 margin={{
  top:20,
  right:20,
  bottom:5,
  left:0
 }}
 >
  <CartesianGrid strokeDasharray={'5 5'}/>
  <Line type='monotone' dataKey='income' strokeWidth={2} name='income' />
<Line
  type='monotone'
  dataKey='expenses'
  stroke='red'
  strokeWidth={2}
  name='Expenses'
/>

  <XAxis dataKey='month'/>
  <YAxis />
  <Legend position="insideBottomLeft"/>
 </LineChart>
  </div>
  )
}

export default Allchart
