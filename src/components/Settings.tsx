import React, {ChangeEvent} from 'react';

type PropsType = {
    count: number
    onClickInc: () => void
    onClickReset: () => void
    minValue: number
    maxValue: number
    setCount: (count: number) => void
}

export const Settings = (props: PropsType) => {

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {

    }
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {

    }
    const onClickSetHandler = () => {

    }

    return (
        <div className='settings'>
            <div className='settingsValue'>
                <div className='max'>
                    <span className='maxValue'>max value:</span>
                    <input onChange={onChangeMaxHandler} className={'settingsInput'} type="number"/>
                </div>
                <div className='start'>
                    <span className='startValue'>start value:</span>
                    <input onChange={onChangeStartHandler} className='settingsInput' type="number"/>
                </div>
            </div>
            <div className='settingsButton'>
                <button onClick={onClickSetHandler} className='set'>set</button>
            </div>
        </div>
    );
};