import NewOrderstyles from './NewOrder.module.css';

const NewOrder = () => {
  return (
    <>
      <h2 className={ NewOrderstyles.newOrderTitle}>New Order</h2>
      <div className={ NewOrderstyles.newOrderContainer}>
        <div className={ NewOrderstyles.orderForm}>
          <div className={ NewOrderstyles.priceSection}>
            <span className={ NewOrderstyles.priceLabel}>Price</span>
            <span className={ NewOrderstyles.priceValue}>$0.0</span>
          </div>

          <label className={ NewOrderstyles.orderLabel}>Select of Services</label>
          <select className={ NewOrderstyles.orderInput}>
            <option>Watching YouTube videos</option>
            <option>Instagram Engagement</option>
            <option>Facebook Likes</option>
          </select>

          <label className={ NewOrderstyles.orderLabel}>Link of Order</label>
          <input
            type="text"
            placeholder="Enter The link of order"
            className={ NewOrderstyles.orderInput}
          />

          <label className={ NewOrderstyles.orderLabel}>Order Time Type</label>
          <div className={ NewOrderstyles.timeInputs}>
            <input
              type="text"
              placeholder="Start Time"
              className={ NewOrderstyles.orderInput}
            />
            <input
              type="text"
              placeholder="End Time"
              className={ NewOrderstyles.orderInput}
            />
          </div>

          <label className={ NewOrderstyles.orderLabel}>Amount</label>
          <input
            type="text"
            placeholder="Enter The link of order"
            className={ NewOrderstyles.orderInput}
          />

          <div className={ NewOrderstyles.buttonsContainer}>
            <button className={ NewOrderstyles.upgradeButton}>Upgrade</button>
            <button className={ NewOrderstyles.cancelButton}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewOrder;
