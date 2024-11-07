import './Payment.css'
// import we pay from '../../../../photo/we pay.svg'
 import etisalat from '../../../../photo/etsalit.svg'
import instpay from '../../../../photo/انستباي.svg'
 import bank from '../../../../photo/banx.svg'
 import vodefone from '../../../../photo/vodefone.svg'
 import orange from '../../../../photo/orange.svg'


import we from '../../../../photo/we pay.svg'

const Payment = () => {
  return (
    <div className="offers-section">
    <div className="offers-header">
        <h2>OFFERS</h2>
    </div>
    <div className="offers-container">
        <div className="offer-card">
            <div className="discount">50%</div>
            <div className="offer-details">
                <h3>$25.00</h3>
                <p>A 50% discount on the subscription fee for the first 1000 subscribers! Instead of $50, it will be only $25.</p>
            </div>
        </div>
        <div className="offer-card">
            <div className="discount">40%</div>
            <div className="offer-details">
                <h3>$30.00</h3>
                <p>A 50% discount on the subscription fee for the first 1000 subscribers! Instead of $50, it will be only $25.</p>
            </div>
        </div>
        <div className="offer-card">
            <div className="discount">30%</div>
            <div className="offer-details">
                <h3>$35.00</h3>
                <p>A 50% discount on the subscription fee for the first 1000 subscribers! Instead of $50, it will be only $25.</p>
            </div>
        </div>
    </div>
    <p className="offer-footer">
        After the number of subscribers reaches 5000, the offer will end, and the subscription fee will be 50 dollars!
    </p>
    <div className="payment-section">
        <h3>We accept payments via!</h3>
        <div className="section-divider"></div>
        <div className="payment-logos">
            <img src={orange} alt="Orange Money" />
            <img src={we} alt="We Pay" />
            <img src={instpay} alt="Instapay" />
            <img src={vodefone} alt="Vodafone" />
            <img src={etisalat} alt="Aman" />
            <img src={bank} alt="Etisalat" />
        </div>
    </div>
</div>

          


  )
}

export default Payment;
