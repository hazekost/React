import s from "./OnOff.module.css";

export type OnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    const onClicked = () => props.setOn(true)
    const offClicked = () => props.setOn(false)

    return <div className={s.onOff}>
        <div className={props.on ? `${s.on} ${s.active}` : s.on} onClick={onClicked}>On</div>
        <div className={props.on ? s.off : `${s.off} ${s.unActive}`} onClick={offClicked}>Off</div>
        <div className={props.on ? `${s.sw} ${s.active}` : `${s.sw} ${s.unActive}`}></div>
    </div>
}