import React, {useState} from "react";

export function UncontrolledRating() {

    const [value, setValue] = useState(0)

    return <div style={{marginTop: "30px"}}>
        <Star selected={value > 0} setValue={setValue} value={1}/>
        <Star selected={value > 1} setValue={setValue} value={2}/>
        <Star selected={value > 2} setValue={setValue} value={3}/>
        <Star selected={value > 3} setValue={setValue} value={4}/>
        <Star selected={value > 4} setValue={setValue} value={5}/>
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