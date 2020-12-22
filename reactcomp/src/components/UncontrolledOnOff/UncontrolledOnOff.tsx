import React, {useState} from 'react';
import s from './OnOff.module.css'

export function UncontrolledOnOff() {

    let [on, setOn] = useState<boolean>(false)

    return (
        <div>
            <div className={on ? s.onStyleA : s.onStyleD} onClick={() => {setOn(true)}}>On</div>
            <div className={on ? s.offStyleD : s.offStyleA} onClick={() => {setOn(false)}}>Off</div>
            <div className={on ? s.indicatorStyleOn : s.indicatorStyleOff}>{on}</div>
        </div>
    )
}