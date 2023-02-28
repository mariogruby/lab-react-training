import visa from './../assets/images/visa.png'
import masterCard from './../assets/images/master-card.svg'
import './CreditCard.css'

const CreditCard = props => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    let bankLogo
    switch (type) {
        case 'Visa':
            bankLogo = visa
            break;

        case 'Master Card':
            bankLogo = masterCard
            break;
    }

    const secNumber = '**** **** **** ' + number.toString().slice(-4)
    const expirationDate = expirationMonth.toString().padStart(2, '0') + '/' + expirationYear.toString().slice(-2)

    const style = {
        color: color,
        backgroundColor: bgColor,
        borderRadius: '10px'
    }
    return (
        <div className="tam" style={style}>
            <div className="logobank">
                <img src={bankLogo} alt="" />
            </div>
            <div className="cardNumber">
                <p>{secNumber}</p>
            </div>
            <div className="cardData">
                <p>Expiration: {expirationDate}</p>
                <p>{bank}</p>
            </div>
            <div className="namecard">
                <p>{owner}</p>
            </div>
        </div>
    )

}

export default CreditCard