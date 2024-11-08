import './NewOrder.css';

const NewOrder = () => {
  return (
    <>
    <h2 className="new-order-title">New Order</h2>
    <div className="new-order-container">
    
      <div className="order-form">
        <div className="price-section">
          <span className="price-label">Price</span>
          <span className="price-value">$0.0</span>
        </div>

        <label className="order-label">Select of Services</label>
        <select className="order-input">
          <option>Watching YouTube videos</option>
          <option>Instagram Engagement</option>
          <option>Facebook Likes</option>
        </select>

        <label className="order-label">Link of Order</label>
        <input
          type="text"
          placeholder="Enter The link of order"
          className="order-input"
        />

        <label className="order-label">Order Time Type</label>
        <div className="time-inputs">
          <input type="text" placeholder="Start Time" className="order-input" />
          <input type="text" placeholder="End Time" className="order-input" />
        </div>

        <label className="order-label">Amount</label>
        <input
          type="text"
          placeholder="Enter The link of order"
          className="order-input"
        />

        <div className="buttons-container">
          <button className="upgrade-button">Upgraded</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default NewOrder;
