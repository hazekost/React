import { useState } from "react"

export function Rating() {
    let [value, setValue] = useState(0)
    return <div>
        <Star selected={value > 0} setValue={() => setValue(1)} />
        <Star selected={value > 1} setValue={() => setValue(2)} />
        <Star selected={value > 2} setValue={() => setValue(3)} />
        <Star selected={value > 3} setValue={() => setValue(4)} />
        <Star selected={value > 4} setValue={() => setValue(5)} />
        {/* <Star value={1} selected={value > 0} setValue={setValue} />
        <Star value={2} selected={value > 1} setValue={setValue} />
        <Star value={3} selected={value > 2} setValue={setValue} />
        <Star value={4} selected={value > 3} setValue={setValue} />
        <Star value={5} selected={value > 4} setValue={setValue} /> */}
    </div>
}

type StarPropsType = {
    //value: number
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {

    const onClickHandler = () => props.setValue()

    return <span onClick={onClickHandler}>{props.selected ? <b>Star </b> : <>Star </>}</span>
}