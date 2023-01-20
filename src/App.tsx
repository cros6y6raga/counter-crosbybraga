import React, {useState} from 'react';
import './App.css';
import {Count} from "./components/Count";

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
        <Count
            count={count}
            minValue={minValue}
            maxValue={maxValue}
            onClickInc={onClickInc}
            onClickReset={onClickReset}
        />
    );
}

export default App;
