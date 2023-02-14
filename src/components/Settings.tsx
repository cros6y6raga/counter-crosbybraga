import React from 'react';

type PropsType = {
    count: number
    onClickInc: () => void
    onClickReset: () => void
    minValue: number
    maxValue: number
}

export const Settings = (props: PropsType) => {
    return (
        <div className='settings'>
            <div className='settingsValue'>
                <div className='max'>
                    <span className='maxValue'>max value:</span>
                    <input className='settingsInput' type="number"/>
                </div>
                <div className='start'>
                    <span className='startValue'>start value:</span>
                    <input className='settingsInput' type="number"/>
                </div>
            </div>
            <div className='settingsButton'>
                <button className='set'>set</button>
            </div>
        </div>
    );
};