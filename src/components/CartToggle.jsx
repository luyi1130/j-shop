import React, { useState } from "react";

export default function CartToggle() {
  const [open, setOpen] = useState(true);

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      <div className="card-header bg-light d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
        <h5 className="mb-0">購物車（2件）</h5>
        <i className={`bi ${open ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
      </div>

      {open && (
        <div className="card-body">
          <div className="row fw-semibold text-muted border-bottom pb-2 mb-3 small">
            <div className="col-5">商品資料</div>
            <div className="col-2">優惠</div>
            <div className="col-1">單價</div>
            <div className="col-2">數量</div>
            <div className="col-2">小計</div>
          </div>

          {[1, 2].map((item, i) => (
            <div className="row align-items-center border-bottom py-3" key={i}>
              <div className="col-5 d-flex gap-3 align-items-center">
                <img
                  src="/images/B12-default.png"
                  alt="商品圖"
                  className="img-thumbnail"
                  style={{ width: "180px", height: "184px", objectFit: "cover" }}
                />
                <div>
                  <div className="fw-semibold">鈣心定植物鈣</div>
                  <div className="text-muted small">維鈣+D3雙效配方</div>
                </div>
              </div>
              <div className="col-2 text-success fw-semibold small">定期購 30% off</div>
              <div className="col-1">NT$365</div>
              <div className="col-2 d-flex gap-2 align-items-center">
                <button className="btn btn-outline-secondary btn-sm">−</button>
                <span>1</span>
                <button className="btn btn-outline-secondary btn-sm">＋</button>
              </div>
              <div className="col-2 fw-semibold">NT$365</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
