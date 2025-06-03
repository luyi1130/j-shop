import React from 'react';

export default function PaymentForm({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="row gy-4">
      {/* 付款方式 */}
      <div className="col-12">
        <h5><i className="bi bi-cash-coin me-2"></i>付款方式</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="paymentMethod"
            id="creditCard"
            value="credit_card"
            checked={formData.paymentMethod === 'credit_card'}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="creditCard">
            信用卡
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="paymentMethod"
            id="cod"
            value="cod"
            checked={formData.paymentMethod === 'cod'}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="cod">
            貨到付款
          </label>
        </div>
      </div>

      {/* 信用卡資訊（當選擇信用卡時顯示） */}
      {formData.paymentMethod === 'credit_card' && (
        <>
          <div className="col-md-6">
            <label htmlFor="cardNumber" className="form-label">信用卡卡號</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber || ''}
              onChange={handleChange}
              placeholder="請輸入16位卡號"
              maxLength={16}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="cardName" className="form-label">持卡人姓名</label>
            <input
              type="text"
              className="form-control"
              id="cardName"
              name="cardName"
              value={formData.cardName || ''}
              onChange={handleChange}
              placeholder="與卡片上相同"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="expiryDate" className="form-label">有效日期</label>
            <input
              type="text"
              className="form-control"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate || ''}
              onChange={handleChange}
              placeholder="MM/YY"
              maxLength={5}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="cvv" className="form-label">安全碼</label>
            <input
              type="password"
              className="form-control"
              id="cvv"
              name="cvv"
              value={formData.cvv || ''}
              onChange={handleChange}
              placeholder="CVV"
              maxLength={4}
            />
          </div>
        </>
      )}

      {/* 發票類型 */}
      <div className="col-12">
        <h5><i className="bi bi-receipt me-2"></i>發票類型</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="invoiceType"
            id="mobile"
            value="mobile"
            checked={formData.invoiceType === 'mobile'}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="mobile">載具</label>
        </div>
        {formData.invoiceType === 'mobile' && (
          <div className="mt-2">
            <label htmlFor="carrierNumber" className="form-label">載具號碼</label>
            <input
              type="text"
              className="form-control"
              id="carrierNumber"
              name="carrierNumber"
              value={formData.carrierNumber || ''}
              onChange={handleChange}
              placeholder="請輸入載具號碼，預設為 /"
            />
          </div>
        )}
        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="radio"
            name="invoiceType"
            id="paper"
            value="paper"
            checked={formData.invoiceType === 'paper'}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="paper">紙本</label>
        </div>
        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="radio"
            name="invoiceType"
            id="company"
            value="company"
            checked={formData.invoiceType === 'company'}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="company">公司戶（統編）</label>
        </div>
        {formData.invoiceType === 'company' && (
          <div className="mt-2">
            <label htmlFor="invoiceNumber" className="form-label">統一編號</label>
            <input
              type="text"
              className="form-control"
              id="invoiceNumber"
              name="invoiceNumber"
              value={formData.invoiceNumber || ''}
              onChange={handleChange}
              placeholder="請輸入8位數字"
              maxLength={8}
            />
          </div>
        )}
      </div>
    </div>
  );
}

