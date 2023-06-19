'use client'
import React, { useEffect, useRef, useState } from 'react'

function ListApp() {
  const [selectPerticular, setSelectPerticular] = useState(true)
  const [sameForAll, setSameForAll] = useState(true)
  const [optionsArray, setOptionsArray] = useState([])
  const [options, setOptions] = useState(Array(5).fill(false))
  const [checkAll, setcheckAll] = useState(false)

  const reference = useRef()

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

      {selectPerticular && (
        <div>
          <label htmlFor="sameValue">Enter same value: </label>
          <input type="text" id="sameValue" name="name" />
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
            <input type="checkbox" reference={reference} checked= {checkAll}/>
            <input type='text'/>
          </div>
          )
        })}
      </div>
    </>
  )
}

export default ListApp
