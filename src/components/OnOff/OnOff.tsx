import React from "react";
import s from "./OnOff.module.css"

export type OnOffPropsType = {
    on: boolean
    setOn: (value: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    return <div className={s.onOffBlock}>
        <div className={s.container}>
            <div onClick={() => props.setOn(true)} className={s.onOff}
                 style={{backgroundColor: props.on ? "green" : "white"}}>On
            </div>
            <div onClick={() => props.setOn(false)} className={s.onOff}
                 style={{backgroundColor: !props.on ? "red" : "white"}}>OFF
            </div>
            <div className={s.ind} style={{backgroundColor: props.on ? "green" : "red"}}>{props.on}</div>
        </div>
    </div>
}
