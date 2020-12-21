import React, {useState} from "react";

export function UncontrolledRating() {

    let [value, setValue] = useState<0|1|2|3|4|5>(0)

    return (
        <div>
            <Star selected={value > 0} value={1} onClick={setValue}/>
            <Star selected={value > 1} value={2} onClick={setValue}/>
            <Star selected={value > 2} value={3} onClick={setValue}/>
            <Star selected={value > 3} value={4} onClick={setValue}/>
            <Star selected={value > 4} value={5} onClick={setValue}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: 1|2|3|4|5
    onClick: (value: 1|2|3|4|5) => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => props.onClick(props.value)}>{props.selected ? <b>Star </b> : <>Star </>}</span>
}