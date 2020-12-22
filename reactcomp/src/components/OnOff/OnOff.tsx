import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    on: boolean
    onClick: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    const onClicked = () => props.onClick(true)
    const offClicked = () => props.onClick(false)
    const onStyle = props.on ? s.onStyleA : s.onStyleD
    const offStyle = props.on ? s.offStyleD : s.offStyleA
    const indicatorStyle = props.on ? s.indicatorStyleOn : s.indicatorStyleOff

    return (
        <div>
            <div className={onStyle} onClick={onClicked}>On</div>
            <div className={offStyle} onClick={offClicked}>Off</div>
            <div className={indicatorStyle}>{props.on}</div>
        </div>
    )
}