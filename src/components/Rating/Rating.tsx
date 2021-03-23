import React from "react";

type RatingPropsType = {
    value: number
    setValue: (value: number) => void
}

export function Rating(props: RatingPropsType) {
    return <div style={{marginTop: "30px"}}>
        <Star selected={props.value > 0} setValue={props.setValue} value={1}/>
        <Star selected={props.value > 1} setValue={props.setValue} value={2}/>
        <Star selected={props.value > 2} setValue={props.setValue} value={3}/>
        <Star selected={props.value > 3} setValue={props.setValue} value={4}/>
        <Star selected={props.value > 4} setValue={props.setValue} value={5}/>
    </div>
}

type StarPropsType = {
    selected: boolean
    value: number
    setValue: (value: number) => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => props.setValue(props.value)}>{props.selected ? <b>Star </b> : <>Star </>}</span>
}