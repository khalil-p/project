'use client'
import React, { useEffect, useRef, useState } from 'react'

function ListApp() {
  const [selectPerticular, setSelectPerticular] = useState(true)
  const [sameForAll, setSameForAll] = useState(true)
  const [optionsArray, setOptionsArray] = useState([])
  const [options, setOptions] = useState(Array(5).fill(false))
  const [checkAll, setcheckAll] = useState(false)
  const [value,setValue] = useState(Array(5).fill(""))
  const reference = useRef()
  const currentValue = useRef("")
  const commonValue = useRef("")

  const handleCommonInput = (e) =>{

    console.log(selectPerticular);
    if(selectPerticular){
      const newValues = value.map((item,index)=>{
        return item = e.target.value
       
      })
      setValue(newValues)
    }
    console.log("This is value",value);
  }

  const handleCurrentValue=(e,index)=>{
    setValue([])
    console.log(e);
    console.log(index);
    const newValues = [...value]
    newValues[index]=e.target.value
    console.log(e.target.value);
    setValue[newValues]
    console.log("This is value",value.length);
  }

  const handleSelectPerticular = () => {
    if (!selectPerticular) {
      setSelectPerticular(true)
      setSameForAll(false)
      console.log('hidden')
    } else {
      setSelectPerticular(false)
      setSameForAll(true)
    }
  }

  const handleSameForAll = () => {
    if (!sameForAll) {
      setSameForAll(true)
      setSelectPerticular(false)
      setValue([])
      console.log('not hidden')
    } else {
      setSameForAll(false)
      setSelectPerticular(true)
    }
  }

  const selectAllOptions = () => {
    if(!checkAll){
      setcheckAll(true)
    }else{
      setcheckAll(false)
    }
    
  }

  return (
    <>
      <div>
        <div>
          <input
            type="radio"
            id="opt_1"
            name="radioOptions"
            value="option1"
            checked={sameForAll}
            onChange={handleSelectPerticular}
          />
          <label htmlFor="opt_1">Same For All</label>
        </div>
        <div>
          <input
            type="radio"
            id="opt_2"
            name="radioOptions"
            value="option2"
            checked={selectPerticular}
            onChange={handleSameForAll}
          />
          <label htmlFor="opt_2">Set Perticular</label>
        </div>
      </div>

      {selectPerticular && (
        <div>
          <label htmlFor="sameValue">Enter same value: </label>
          <input ref={commonValue} onChange={(e)=>handleCommonInput(e)} type="text" id="sameValue" name="name" />
        </div>
      )}

      <div>
        <input
          type="checkbox"
          id="selectAll"
          name="myCheckbox"
          onChange={selectAllOptions}
        />
        <label htmlFor="selectAll"> Select All</label>
      </div>
      <div>
        {options.map((item, index) => {
        return ( <div key ={index}>
            <input type="checkbox"  defaultChecked= {checkAll}/>
            <input value={value[index]} ref={currentValue} onChange={(e)=>handleCurrentValue(e,index)}type='text'/>
          </div>
          )
        })}
      </div>
    </>
  )
}

export default ListApp
