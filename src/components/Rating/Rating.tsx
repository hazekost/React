export type RatingPropsType = {
    value: number
    setValue: (value: number) => void
}

export function Rating(props: RatingPropsType) {

    return <div>
        <Star selected={props.value > 0} setValue={() => props.setValue(1)} />
        <Star selected={props.value > 1} setValue={() => props.setValue(2)} />
        <Star selected={props.value > 2} setValue={() => props.setValue(3)} />
        <Star selected={props.value > 3} setValue={() => props.setValue(4)} />
        <Star selected={props.value > 4} setValue={() => props.setValue(5)} />
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