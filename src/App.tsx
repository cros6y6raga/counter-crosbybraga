import React, {useEffect, useState} from 'react';
import './App.css';
import {Count} from "./components/Count";
import {Settings} from "./components/Settings";

function App() {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem('countValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCount(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [count])

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