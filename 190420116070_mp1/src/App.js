import React ,{ useState} from 'react';
import './App.css';
let count=1;
let setCount=0;
const App =()=>{
  const state=useState()
  const [count,setCount]=useState(0)

  const InvNum =()=>{
    // console.log("clicked"+count++)
    setCount(count+1);
  }
  console.log(state)
  const InvNum1 =()=>{
    // console.log("clicked"+count++)
    setCount(count-1);
  }
  console.log(state)
  return(
    <>
    <h1 className='box'>Cricket Score Count</h1>
   <div className='max-height'>
      <h1 id='counter'>
        {count}
      </h1>
      {/* <div className='main-container'> */}
      <button onClick={InvNum} className='prevBtn'>Add count</button>
      <button onClick={InvNum1} className='nextBtn'>Lower Count</button>
</div>
      {/* </div> */}
    </>
  )
}

export default App