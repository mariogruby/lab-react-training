import './Rating.css'
const Rating = props => {
    //metodo repeat es mas facil :) //
    const blacks = Math.round(props.children)
    const whites = 5 - blacks
    const stars = '★'.repeat(blacks) + '☆'.repeat(whites)

    return (
        <div className="card">
            <p className="star">{stars}</p>
        </div>
    )
}
export default Rating