import React, {useState} from 'react';
import './App.css';
import {Count} from "./components/Count";
import {Settings} from "./components/Settings";

function App() {
    const [count, setCount] = useState(0)
    const minValue = 0;
    const maxValue = 5;
    const onClickInc = () => {
        setCount(value => value + 1);
    }
    const onClickReset = () => {
        setCount(minValue)
    }
    return (
        <div className='header'>
            <Settings/>
            <Count
                count={count}
                minValue={minValue}
                maxValue={maxValue}
                onClickInc={onClickInc}
                onClickReset={onClickReset}
            />
        </div>
    );
}

export default App;