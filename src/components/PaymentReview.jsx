import React from 'react';

export default function PaymentReview({
  formData,
  cartItems,
  usedCredits,
  availableCredits,
  onBack,
  onSubmit,
}) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 60 : 0;
  const total = subtotal + shipping - usedCredits;

  const maskCardNumber = (cardNum) => {
    if (!cardNum) return '';
    return cardNum.replace(/\d{12}(\d{4})/, '**** **** **** $1');
  };

  return (
    <div className="row mt-4 gy-4">
      {/* 顧客資料 */}
      <div className="col-md-6">
        <h5 className="mb-3">
          <img
            src="./icons/icon-member.svg"
            alt="姓名"
            style={{ width: 30, height: 30 }}
            className="me-2"
          />
          顧客資訊
        </h5>
        <p>會員名稱：{formData.name}</p>
        <p>電子信箱：{formData.email}</p>
        {/* <p>聯絡電話：{formData.phone}</p> */}
      </div>

      {/* 配送資料 */}
      <div className="col-md-6">
        <h5 className="mb-3">
          <img
            src="./icons/icon-shipping.svg"
            alt="配送資訊"
            style={{ width: 30, height: 30 }}
            className="me-2"
          />配送資訊
        </h5>
        <p>地址：{formData.address}</p>
        <p>收件人姓名：{formData.recipient}</p>
        <p>收件人電話：{formData.recipientPhone}</p>
        <p className="text-muted">運費：NT${shipping}</p>
      </div>



      {/* 付款與發票資訊 */}
      <div className="col-6">
        <h5 className="mb-3">
          <i className="bi bi-info-circle me-2"></i>付款與發票資訊
        </h5>

        {/* 付款方式 */}
        <p>付款方式：{formData.paymentMethod === 'credit_card' ? '信用卡' : '貨到付款'}</p>

        {/* 信用卡資料（僅在使用信用卡時顯示） */}
        {formData.paymentMethod === 'credit_card' && (
          <>
            <p>信用卡卡號：{maskCardNumber(formData.cardNumber)}</p>
            <p>到期日：{formData.expiryDate}</p>
          </>
        )}

        {/* 發票類型 */}
        <p>發票類型：
          {{
            mobile: '載具',
            paper: '紙本',
            company: '公司戶（統編）',
          }[formData.invoiceType] || '未指定'}
        </p>

        {/* 載具號碼 */}
        {formData.invoiceType === 'mobile' && (
          <p>載具號碼：{formData.carrierNumber || '/'}</p>
        )}

        {/* 統一編號 */}
        {formData.invoiceType === 'company' && (
          <p>統一編號：{formData.invoiceNumber}</p>
        )}
      </div>

      {/* 訂單金額與購物金 */}
      <div className="col-6">
        <h5 className="mb-3">
          <img
            src="./icons/icon-list.svg"
            alt="配送資訊"
            style={{ width: 30, height: 30 }}
            className="me-2"
          />訂單明細
        </h5>
        <p>商品小計：NT${subtotal}</p>
        <p>
          使用購物金：<span className="text-success">-NT${usedCredits}</span>（可用：NT${availableCredits}）
        </p>
        <p>運費：NT${shipping}</p>
        <p className="fw-bold fs-5 mt-2" style={{ color: '#3dce94' }}>
          總金額：NT${total}
        </p>
      </div>

      {/* 動作按鈕 */}
      <div className="col-12 text-end">
        <button className="btn btn-onback-light me-3" onClick={onBack}>
          上一步:付款方式
        </button>
        <button className="btn-brand" onClick={onSubmit}>
          素！下單
        </button>
      </div>
    </div>
  );
}



