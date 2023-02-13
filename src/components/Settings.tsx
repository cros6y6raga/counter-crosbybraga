import React from 'react';

export const Settings = () => {
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