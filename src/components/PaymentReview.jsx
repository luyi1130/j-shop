// src/components/PaymentReview.js
import React from 'react';

export default function PaymentReview({ formData, cartItems, usedCredits, availableCredits, onBack, onSubmit }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 60 : 0;
  const total = subtotal + shipping - usedCredits;

  return (
    <div className="row mt-4 gy-4">
      {/* 顧客資料 */}
      <div className="col-md-6">
        <h5 className="mb-3"><i className="bi bi-person-circle me-2"></i>顧客資訊</h5>
        <p>會員名稱：{formData.name}</p>
        <p>電子信箱：{formData.email}</p>
        <p>聯絡電話：{formData.phone}</p>
      </div>

      {/* 配送資料 */}
      <div className="col-md-6">
        <h5 className="mb-3"><i className="bi bi-truck me-2"></i>配送資訊</h5>
        <p>地址：{formData.address}</p>
        <p>收件人姓名：{formData.recipient}</p>
        <p>收件人電話：{formData.recipientPhone}</p>
        <p className="text-muted">運費：NT${shipping}</p>
      </div>

      {/* 訂單金額與購物金 */}
      <div className="col-12">
        <h5 className="mb-3"><i className="bi bi-credit-card me-2"></i>訂單明細</h5>
        <p>商品小計：NT${subtotal}</p>
        <p>使用購物金：<span className="text-success">-NT${usedCredits}</span>（可用：NT${availableCredits}）</p>
        <p>運費：NT${shipping}</p>
        <p className="fw-bold fs-5 mt-2" style={{ color: "#3dce94" }}>總金額：NT${total}</p>
      </div>

      {/* 動作按鈕 */}
      <div className="col-12 text-end">
        <button className="btn btn-outline-secondary me-2" onClick={onBack}>上一步</button>
        <button className="btn-brand" onClick={onSubmit}>確認付款</button>
      </div>
    </div>
  );
}
