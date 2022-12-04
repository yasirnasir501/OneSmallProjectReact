import React, { useState } from 'react';
// import  ReactDOM  from 'react-dom';
// import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
// import { Routes, Route } from 'react-router-dom';


function App() {
    const [mode, setMode] = useState('light'); //Weather dark mode is enable or not
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1100);
    }

    const removeBodyClasses = () =>{
        document.body.classList.remove('bg-light')
        document.body.classList.remove('bg-dark')
        document.body.classList.remove('bg-warning')
        document.body.classList.remove('bg-danger')
        document.body.classList.remove('bg-success')
    }
    

    const toggleMode = (cls) => {
        removeBodyClasses();
        // console.log(cls);
        document.body.classList.add('bg-'+cls)
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = '#213149';
            showAlert("Dark Mode has enabled", "success")
            // document.title = 'TextUtils - Dark Mode';

            // setInterval(() => {
            //     document.title = 'TextUtlis is Amazong Mode'
            // }, 2000);
            // setInterval(() => {
            //     document.title = 'TextUtlis is Install Now'
            // }, 1500);


        }

        else {
            setMode('light')
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode has enabled", "success")
            // document.title = 'TextUtils - Light Mode';

        }

    }

    return (
        <>

            {/* <Routes>
                <Route
                    path="/ TextForm "
                    element={<textform />}
                />
                <Route
                    path="/ AboutUs"
                    element={<AboutUs />}
                    />
            </Routes> */}

            {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>  */}
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
                    {/* { <AboutUs mode={mode}/> } */}

            <div className='container my-3'>
                <TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />
            </div>

        </>
    );
}




export default App;