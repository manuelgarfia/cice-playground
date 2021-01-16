import {  FC } from 'react'

export const ExcerciseSix: FC = ()=>{
  return (
    <div>
      <input type="text"
             placeholder="enter your name...Sr"
             onChange={(e)=>{
               localStorage.setItem("name",e.target.value)
             }
             }/>
    </div>
  )
}
