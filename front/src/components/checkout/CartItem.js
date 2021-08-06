import formatPrice from "../tools/formatPrice"

const CartItem = ({ item }) => {
  console.log(item)
  const price = formatPrice(item)
  const handleSetItemQuantity = () => {}
  return (
    <>
      <div className="modal-body">
        <div className="d-flex align-items-center mt-3">
          <img className="img-tiny me-4" src={`${process.env.PUBLIC_URL}/images/products/${item.image}`} />
          <div>
            <span>
              {item.name} ({item.sku})
            </span>
            <p className="text-start mt-1">
              <strong>
                {price} x {item.quantity}
              </strong>
            </p>
          </div>
          <div className="ms-auto text-end">
            <input className="text-end form-control input-quantity" type="number" value={item.quantity} min={0} onChange={handleSetItemQuantity} />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary text-dark">
          <strong>Checkout</strong>
        </button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
          Keep Shopping
        </button>
      </div>
    </>
  )
}

export default CartItem
