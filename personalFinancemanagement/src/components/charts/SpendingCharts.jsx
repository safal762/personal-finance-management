import React from 'react'
import {useSelector} from 'react-redux'
import {PieChart,Pie,Cell,Tooltip} from 'recharts'
function SpendingCharts() {
const expenseData=useSelector((state)=>state.expense.expense)
console.log("Expense data:", expenseData)
console.log("Is array:", Array.isArray(expenseData))

console.log(
  "Total amount:",
  expenseData.reduce((total, item) => total + Number(item.amount), 0)
)
console.log(expenseData.map(item => ({
  amount: item.amount,
  type: typeof item.amount,
  category: item.catogery
})))
  const categories = [
  { name: 'Food', color: '#FF6384' },
  { name: 'Rent', color: '#36A2EB' },
  { name: 'Transportation', color: '#FFCE56' },
  { name: 'Shopping', color: '#9966FF' },
  { name: 'Entertainment', color: '#4BC0C0' },
  { name: 'Healthcare', color: '#FF9F40' },
  { name: 'Education', color: '#7BC8A4' },
  { name: 'Utilities', color: '#C9CBCF' },
  { name: 'Travel', color: '#E76BF3' },
  { name: 'Other', color: '#8B949E' }
]
  return (
    <div>
      <PieChart width={400} height={300}>

<Pie 
data={expenseData}
dataKey='amount'
nameKey='catogery'
outerRadius={100}
label={({catogery,percent})=>{
  return `${catogery} ${(percent*100).toFixed(1)}% `  // here recharts automatically calculates the percent using amount that we passed in data keys 
}}
>
{expenseData.map((item)=>{
  const cat=categories.find((items)=>{
    return items.name.toLowerCase() == item.catogery.toLowerCase()
  })
  return(
    <Cell key={item.id}
      fill={cat?.color || '#ffffff'}
    />
  )
})}
</Pie>

<Tooltip/>
      </PieChart>
    </div>
  )
}

export default SpendingCharts