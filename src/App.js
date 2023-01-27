import logo from './logo.svg';
import React from 'react';
import { useState, useEffect, Fragrment } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
 const [text,setText]=useState()
 const [loading,setLoading]=useState(false)
 
 function loadData()
 {
  setTimeout(()=>{
    setText("This is  Loading test...")
    setLoading(false);
  },3000)
 }
function HandleOnclick()
{
  setLoading(true)
  loadData();
}
  return (
    <div className="App">
      <input type="button" style={{margin:"5px",padding:"10px",fontSize:"14px"}} value="Start" onClick={HandleOnclick}  />
     <h1>{ loading?(
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    //  onClick={setLoading(!)}
    >
      <CircularProgress color="inherit" />
    </Backdrop>):text
      }</h1>
    </div>
  );
}

export default App;
