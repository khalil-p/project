'use client'
import React, { useEffect, useRef, useState } from 'react'

function ListApp() {
  const [selectPerticular, setSelectPerticular] = useState(false)
  const [sameForAll, setSameForAll] = useState(false)
  const [values,setValues] = useState(Array(5).fill(""))
  const [nameValue,setNameValue] = useState(["a","b","c","d","f"])
  const [arrayAfterSelectAll, setArrayAfterSelectAll] = useState([])
  const [options, setOptions] = useState(Array(5).fill(false))
  const [checkAll, setcheckAll] = useState(false)
  const reference = useRef()
  const currentValue = useRef("")
  const commonValue = useRef("")
  const repectiveValue = useRef("")

  const handleCommonInput = () =>{
    // Why map not working here
    setValues(Array(5).fill(commonValue.current.value))
  }

  const handleCurrentValue=(e,index)=>{
    setValues([])
    const newValues = [...values]
    newValues[index]=e.target.value
    setValues[newValues]
  }

  const handleSelectPerticular = () => {
      setSelectPerticular(true)
      setSameForAll(false)
  }

  const handleSameForAll = () => {
      setSameForAll(true)
      setSelectPerticular(false)
      setValues([])
  }

  const selectAllOptions = () => {
    const newArrAY =[]
    if(!checkAll){
      setcheckAll(true)
      nameValue.forEach((item,index)=>{
          newArrAY.push({name:item,value:values[index]})
      })
      setArrayAfterSelectAll(newArrAY)
    }else if(checkAll){
      setcheckAll(false)
      console.log(newArrAY.length);
      setArrayAfterSelectAll(newArrAY)
    }
  }


  useEffect(()=>{
    console.log("This is arrayAfterSelectAll....",arrayAfterSelectAll);
  },[arrayAfterSelectAll])

  const handleRespectiveValue =(index)=>{
    console.log("61=>",currentValue.current.value, index)
    const newArray = arrayAfterSelectAll.splice(index,index)
    setArrayAfterSelectAll(newArray)
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
            onChange={handleSameForAll}
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
            onChange={handleSelectPerticular}
          />
          <label htmlFor="opt_2">Set Perticular</label>
        </div>
      </div>

      {sameForAll && (
        <div>
          <label htmlFor="sameValue">Enter same value: </label>
          <input ref={commonValue} onChange={handleCommonInput} type="text" id="sameValue" name="name" />
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
            <input ref={repectiveValue} onChange={()=>handleRespectiveValue(index)} type="checkbox"   defaultChecked= {checkAll}/>
            <span>{nameValue[index]} : </span>
            <input value={values[index]} ref={currentValue} onChange={(e)=>handleCurrentValue(e,index)}type='text'/>
          </div>
          )
        })}
      </div>
    </>
  )
}

export default ListApp
