import formatPrice from "../tools/formatPrice"

const CartItem = ({ item }) => {
  console.log(item)
  const price = formatPrice(item)
  const handleSetItemQuantity = () => {}
  return (
    <>
      <div className="modal-body">
        <div className="d-inline-flex align-items-center w-100">
          <img className="img-tiny me-2" src={`${process.env.PUBLIC_URL}/images/products/${item.image}`} />
          <span>
            {item.name} ({item.sku})
          </span>
          <span className="ms-5">{price}</span>
          <div className="text-right ms-5">
            <input className="text-right form-control w-50 input-quantity" type="number" value={item.quantity} onChange={handleSetItemQuantity} />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
      </div>
    </>
  )
}

export default CartItem
