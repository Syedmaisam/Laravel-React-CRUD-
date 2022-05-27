import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Nav from "./Nav"
import Contact from "./Contact"

import AddContact from "./AddContact"
import EditContact from "./EditContact"



function Example() {
    return (
        <Router>
            <>
            <Nav/>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-8'>

                    <Routes>
                        <Route path='/'  element={<Contact/>} />
                        <Route path='/AddContact'  element={<AddContact/>} />
                        <Route path='/EditContact'  exact element={<EditContact/>} />

                    </Routes>
                    </div>
                </div>
            </div>
            {/* <h1>chola wala</h1> */}

            </>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
