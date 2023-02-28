import './IdCard.css'

const IdCard = (props) => {

    const { lastName, firstName, gender, height, birth, picture } = props
    const birday = birth.toDateString()

    return (
        <div className="card">
            <div className="picture">
                <img src={picture} alt="" />
            </div>
            <div className="info">
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height} m.</p>
                <p><strong>Birth:</strong> {birday}</p>
            </div>
        </div>
    )
}

export default IdCard


