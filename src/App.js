
import React, { useState } from 'react';
import './App.css';
import About from './components/About';                         
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
   BrowserRouter as Main , Route,Routes
} from "react-router-dom";
 
function App( ) {
  //this is set mode useState
  const [mode, setmode] = useState("light")
  //this is show the  alert function useState

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }


  const switchmode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = " #042743";
      showAlert("dark mode has been enables", "success");
      document.title = " TextUtils-Dark Mode" 
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white"
      showAlert(" light mode has been enables", "success")
      document.title = "TextUtils-LIGHT MODE"

    }
  }
  return (
    <>
      <Main> 
        <Navbar name="TextUtils" mode={mode} switchmode={switchmode} />
        <Alert alert={alert} />

        <div className="container">
        <Routes>
          <Route exact path='/' element={<Textform showAlert={showAlert} heading = ' Try TextUtils-Word counter,Character counter,Remove extra spaces' mode = {mode} />}/>
          <Route exact path='/about'element={<About mode = {mode}/>}/> 
        </Routes>

          {/* <Textform showAlert={showAlert} heading = 'Enter a Text to analyze' mode = {mode} /> */}
          
          {/* <About/>  */}
        </div>
        </Main>
    </>

  );
}

export default App;
