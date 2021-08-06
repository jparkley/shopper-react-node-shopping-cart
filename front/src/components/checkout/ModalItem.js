import React from "react"

const ModalItem = ({ item }) => {
  console.log(item)
  return (
    <>
      <div className="modal-body">
        <p>Items in Your Cart.</p>
        <p>
          {item.name} {item.price} {item.sku}
        </p>
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

export default ModalItem
