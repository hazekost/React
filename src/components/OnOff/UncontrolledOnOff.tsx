import { useState } from "react";
import s from "./OnOff.module.css";

export function UncontrolledOnOff() {

    let [on, setOn] = useState(false);

    return <div className={s.onOff}>
        <div className={on ? `${s.on} ${s.active}` : s.on} onClick={() => setOn(true)}>On</div>
        <div className={on ? s.off : `${s.off} ${s.unActive}`} onClick={() => setOn(false)}>Off</div>
        <div className={on ? `${s.sw} ${s.active}` : `${s.sw} ${s.unActive}`}></div>
    </div>
}