
import "./CouponCard.css";
import coboun from "../../../../photo/cobon icon.svg";

const CouponCard = () => {
  return (
    <div>
       <div className="coupon-card">
        <div className="coupon-percentage">
        <h4>30% </h4>
        </div>
        <div className="coupon-details">
          <p className="coupon-title">Coupon</p>
          <div className="coupon-icon">
            <p className="coupon-code">3258478167</p>
            <img src={coboun} alt="Icon" />
          </div>
          <p className="coupon-status">
            Status: <span className="coupon-status-result">Unused</span>
          </p>
          <p className="coupon-date">
            Date: <span className="coupon-date-result">15/01/2025</span>
          </p>
          <div className="line"></div>
          <p className="coupon-description">
            Nullam in viverra risus. Sed et tortor sit amet arcu volutpat
            hendrerit.    Nullam in viverra risus. Sed et tortor sit amet arcu volutpat
        
          </p>
        </div>
      </div>

      <div className="coupon-card">
        <div className="coupon-percentage2">
        <h4>30% </h4>
         

        </div>
        <div className="coupon-details">
          <p className="coupon-title">Coupon</p>
          <div className="coupon-icon">
            <p className="coupon-code">3258478167</p>
            <img src={coboun} alt="Icon" />
          </div>
          <p className="coupon-status">
            Status: <span className="coupon-status-result">Unused</span>
          </p>
          <p className="coupon-date">
            Date: <span className="coupon-date-result">15/01/2025</span>
          </p>
          <div className="line"></div>
          <p className="coupon-description">
          Nullam in viverra risus. Sed et tortor sit amet arcu volutpat
            hendrerit.    Nullam in viverra risus. Sed et tortor sit amet arcu volutpat
  
          
          </p>
        </div>
      </div>

      <div className="coupon-footer"></div>
    </div>
  );
};

export default CouponCard;
