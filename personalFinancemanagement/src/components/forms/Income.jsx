import React from 'react'
import {addTransaction} from '../../store/income'
import { useDispatch } from 'react-redux';
import {useForm} from 'react-hook-form'
import {  Button, Input } from '../index'
function Income() {
    const dispatch=useDispatch()
  const { register, handleSubmit } = useForm()
  const incomeSumbit=(income)=>{
    dispatch(addTransaction(income))
  }
  return (
   
<div className="w-full max-w-xl mx-auto px-4 py-8">
  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900">
        Add Income
      </h2>
      <p className="text-sm text-gray-500 mt-2">
        Record your income and keep track of your earnings.
      </p>
    </div>

    <form
      onSubmit={handleSubmit(incomeSumbit)}
      className="flex flex-col gap-5"
    >
      <Input 
        label='Title'
        placeholder='Enter income title'
        {...register('title', {
          required: true,
        })}
      />

      <Input 
        label='Amount (Rs.)'
        placeholder='Enter amount'
        {...register('amount', {
          required: true,
          valueAsNumber: true
        })}
      />

      <Input
        label='Category'
        placeholder='Enter category'
        {...register('catogery', {
          required: true
        })}
      />

      <Input 
        label='Description'
        placeholder='Enter description'
        {...register('description', {
          required: true
        })}
      />

      <div className="pt-3">
        <Button className="w-full">
          Add Income
        </Button>
      </div>
    </form>

  </div>
</div>

  )
}

export default Income