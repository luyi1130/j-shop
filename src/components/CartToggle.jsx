import React, { useState } from "react";
import Tag from './Tag';

export default function CartToggle({ cartItems, setCartItems }) {
  const [open, setOpen] = useState(true);

  const handleDelete = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQtyChange = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          let newQty = item.qty + delta;
          if (newQty < 1) newQty = 1;
          if (newQty > 10) newQty = 10;
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  };

  const handleInputChange = (id, value) => {
    let val = parseInt(value, 10);
    if (isNaN(val)) val = 1;
    if (val < 1) val = 1;
    if (val > 10) val = 10;

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, qty: val } : item
      )
    );
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      <div
        className="card-header bg-light d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      >
        <h5 className="mb-0 fw-regular small">購物車（{cartItems.length} 件）</h5>
        <i className={`bi ${open ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
      </div>

      {open && (
        <div className="card-body">
          <div className="row fw-semibold text-muted border-bottom pb-2 mb-3 small">
            <div className="col-5">商品資料</div>
            <div className="col-2">優惠</div>
            <div className="col-1">單價</div>
            <div className="col-2">數量</div>
            <div className="col-1">小計</div>
            <div className="col-1 text-end">刪除</div>
          </div>

          {cartItems.map((item) => (
            <div
              className="row align-items-center border-bottom py-3"
              key={item.id}
            >
              <div className="col-5 d-flex gap-3 align-items-center">
                <img
                  src="./images/B12-default.png"
                  alt="商品圖"
                  className="img-thumbnail"
                  style={{
                    width: "180px",
                    height: "184px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <div className="fw-semibold">{item.name}</div>
                  <div className="text-muted small">{item.desc}</div>
                </div>
              </div>
              <div className="col-2">
                <Tag label="定期購 30% off" />
                <div>
                  <Tag label="檔期活動 10% off" color="sale" />
                </div>
              </div>

              <div className="col-1">NT${item.price}</div>
              <div className="col-2 d-flex gap-2 align-items-center">
                <button
                  className="quantity-btn"
                  onClick={() => handleQtyChange(item.id, -1)}
                >−</button>

                <input
                  type="number"
                  className="qty-input"
                  value={item.qty}
                  min={1}
                  max={10}
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                />

                <button
                  className="quantity-btn"
                  onClick={() => handleQtyChange(item.id, +1)}
                >＋</button>
              </div>
              <div className="col-1 fw-semibold">NT${item.price * item.qty}</div>
              <div className="col-1 text-end">
                <button
                  className="btn btn-outline-danger btn-sm p-1"
                  onClick={() => handleDelete(item.id)}
                  title="刪除商品"
                  style={{ border: "none", background: "transparent" }}
                >
                  <img
                    src="./icons/icon-del.svg"
                    alt="刪除"
                    style={{ width: 25, height: 25, cursor: "pointer" }}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

