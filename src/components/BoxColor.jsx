

const BoxColor = props => {

    const { r, g, b } = props
    const rgbColor = `rgb(${r}, ${g}, ${b})`
    const rgbTransform = (c) => {
        const result = c.toString(16)
        return result.length === 1 ? '0' + result : result
    }
    const boxColor = '#' + rgbTransform(r) + rgbTransform(g) + rgbTransform(b)
    const style = {
        backgroundColor: rgbColor
    }
    return (
        <div className="card" style={style}>
            <div className="">
                <p>{rgbColor}</p>
                <p>{boxColor}</p>
            </div>
        </div>
    )
}

export default BoxColor