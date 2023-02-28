import Rating from '../components/Rating';
import './DriverCard.css'
const DriverCard = props => {
    const { name, rating, img, car } = props
    return (
        <div className="driverCard">
            <div className="imgdrivers">
                <img src={img} alt="" />

            </div>
            <div className="infoD">
                <h5>{name}</h5>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>


    )
}
export default DriverCard