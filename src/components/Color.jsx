import React from 'react'
import { useState } from 'react'
import colorNames from "colornames";
function Color() {
    const [colorValue,setColorValue]= useState("")
    const [hexValue,setHexValue] =useState('')
    const [isDark,setIsDark]=useState(true)
  return (
     <>
     <div>
        <div className='rectangle' style={{backgroundColor :colorValue,color:isDark ?"#000":"#FFF"}}>
            <p>{colorValue ? colorValue :"Empty value"}</p>
            <p>{hexValue ? hexValue:null}</p>
        </div>
        <input 
        required
        type='text'
        placeholder='Add Color Name'
        value={colorValue}
        onChange={(e)=>{
            setColorValue(e.target.value)
            setHexValue(colorNames(e.target.value))
        }}
        />
        <button onClick={()=>setIsDark(!isDark)}>Toogle Text color</button>
     </div>
     </>
  )
}

export default Color