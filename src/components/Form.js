import React from 'react'

export default function Form() {
    let currencyValues={
    inr:{
        usd:83.24,
        amd:56.21,
        gbp:102.4,
    },
    usd:{
        inr:0.002,
        amd:0.420,
        gbp:1.5,
    }
    }

    const countries = [{
        name:"India",
        capital:"Delhi"
    },
    {
        name:"Australia",
        capital:"Sydney"
    }
]

    console.log(currencyValues.inr.usd)

    const [inp,setInp] = React.useState('')
    const [text,setText] = React.useState('')
    const [opt,setopt] = React.useState('')
  
    const [inpVal,setInpval] = React.useState('')
    const [textVal,setTextVal] = React.useState('')
    const [selectVal,setSelectVal] = React.useState('')
    const [showOutput,setShowOutput] = React.useState(false)
  
    const handleSubmit = (e)=>{
      setShowOutput(true)
      setInpval(inp)
      setTextVal(text)
      setSelectVal(opt)
      e.preventDefault()
    }
        return (
            <div>
               <center><form onSubmit={handleSubmit}>
                 <label>Input</label><br/>
                 <input value={inp} 
                   onChange={(e)=>setInp(e.target.value)}/><br/>
  
                 <label>Textarea</label><br/>
                 <textarea value={text} onChange={(e)=>setText(e.target.value)}/><br/>
  
                 <label>Select</label><br></br>
                 <select value={opt} onChange={(e)=>setopt(e.target.value)}>
                   <option value="">Select an option</option>
                   <option value="option1">option1</option>
                   <option value="option2">option2</option>
                   <option value="option3">option3</option>
                 </select><br/>
                 <button type="submit">Submit</button>
               </form>
  
              <div>
                {
                showOutput && (
                  <div>
                    Input: {inpVal}<br/>
                    Textarea: {textVal}<br/>
                    Select: {selectVal}
                  </div>
                )
                }
              </div>
              </center>
              
            </div>
        );
    };
