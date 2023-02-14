import React from 'react';
import {Settings} from "./Settings";

type PropsType = {
    count: number
    onClickInc: () => void
    onClickReset: () => void
    minValue: number
    maxValue: number
}
export const Count = (props: PropsType) => {
    return (
        <>
            <div className='counter'>
                <div className='monitor'>
                    <span className={props.count === props.maxValue ? 'error' : ''}>{props.count}</span>
                </div>
                <div className='buttons'>
                    <button className='button' disabled={props.count === props.maxValue} onClick={props.onClickInc}>inc
                    </button>
                    <button className='button' disabled={props.count === props.minValue}
                            onClick={props.onClickReset}>reset
                    </button>
                </div>

            </div>
            <Settings
                count={props.count}
                minValue={props.minValue}
                maxValue={props.maxValue}
                onClickInc={props.onClickInc}
                onClickReset={props.onClickReset}
            />
        </>
    );
};