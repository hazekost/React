import React, {useState} from "react";
import s from "./UncontrolledOnOff.module.css"

export function UncontrolledOnOff() {

    const [on, setOn] = useState(false)

    return <div className={s.onOffBlock}>
        <div onClick={() => setOn(true)} className={s.onOff}
             style={{backgroundColor: on ? "green" : "white"}}>On
        </div>
        <div onClick={() => setOn(false)} className={s.onOff}
             style={{backgroundColor: !on ? "red" : "white"}}>OFF
        </div>
        <div className={s.ind} style={{backgroundColor: on ? "green" : "red"}}>{on}</div>
    </div>
}
