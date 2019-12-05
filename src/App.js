import React, { useEffect, useState } from 'react';
import './App.css';
import InputNumber1 from './components/input-number/index1';
import InputNumber2 from './components/input-number/index2';

function App() {
    let [value, setValue] = useState('');
    let state = {
        defaultValue: 11
    }
    useEffect(() => {
        
    })
    return (
        <div className="App">
            <h1>App</h1>
            <InputNumber1 value={value} onChange={e => {
                setValue(e.target.value);
            }}/>

            <InputNumber2  defaultValue={state.defaultValue}  onChange={ e => {
                console.log(e.target.value);
            }}/>
        </div>
    );
}

export default App;
