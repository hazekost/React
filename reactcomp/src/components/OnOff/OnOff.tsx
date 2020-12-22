import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    on: boolean
    onClick: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    return (
        <div>
            <div className={props.on ? s.onStyleA : s.onStyleD} onClick={() => props.onClick(true)}>On</div>
            <div className={props.on ? s.offStyleD : s.offStyleA} onClick={() => props.onClick(false)}>Off</div>
            <div className={props.on ? s.indicatorStyleOn : s.indicatorStyleOff}>{props.on}</div>
        </div>
    )
}