import React from 'react';

export const Settings = () => {
    return (
        <div className='settings'>
            <div className='settingsValue'>
                <div className='settingsMainSpan'>
                    <span>max value: <input className='settingsInput' type="number"/></span>
                    <span>start value: <input className='settingsInput' type="number"/></span>
                </div>
            </div>
        </div>
    );
};