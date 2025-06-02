import React, { forwardRef, useState } from 'react';

const ShippingForm = forwardRef(({ onNextStep }, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    note: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^09\d{8}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = '請輸入收件人姓名';
    if (!formData.phone.trim()) newErrors.phone = '請輸入聯絡電話';
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = '電話格式錯誤（例：0912345678）';
    if (!formData.email.trim()) newErrors.email = '請輸入 Email';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Email 格式錯誤';
    if (!formData.address.trim()) newErrors.address = '請輸入地址';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onNextStep();
    }
  };

  return (
    <div ref={ref}>
      {/* 大標區塊 */}
      <div className="bg-light card border-0 rounded-4 mb-3 py-2">
        <div className="card-body py-1">
          <h5 className="mb-0">填寫資料</h5>
        </div>
      </div>

      {/* 表單內容 */}
      <form className="row g-3 mt-1" onSubmit={handleSubmit}>
        {/* 收件人姓名 */}
        <div className="col-md-6">
          <div className="d-flex align-items-center mb-1">
            <img src="./icons/icon-member.svg" alt="姓名" style={{ width: 30, height: 30 }} className="me-2" />
            <label className="form-label">收件人姓名</label>
          </div>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            placeholder="請輸入收件人姓名"
            value={formData.name}
            onChange={handleChange('name')}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* 聯絡電話 */}
        <div className="col-md-6">
          <label className="form-label">聯絡電話</label>
          <input
            type="text"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            placeholder="例如：0912345678"
            value={formData.phone}
            onChange={handleChange('phone')}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        {/* Email */}
        <div className="col-md-6">
          <div className="d-flex align-items-center mb-1">
            <label className="form-label">Email</label>
          </div>
          <div className="input-group">
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange('email')}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
        </div>

        {/* 地址 */}
        <div className="col-12">
          <div className="d-flex align-items-center mb-1">
            <img src="./icons/icon-shipping.svg" alt="地址" style={{ width: 30, height: 30 }} className="me-2" />
            <label className="form-label mb-0">運送地址</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              className={`form-control ${errors.address ? 'is-invalid' : ''}`}
              placeholder="請輸入完整地址"
              value={formData.address}
              onChange={handleChange('address')}
            />
            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
          </div>
        </div>

        {/* 備註 */}
        <div className="col-12">
          <div className="d-flex align-items-center mb-1">
            <img src="./icons/icon-list.svg" alt="備註" style={{ width: 30, height: 30 }} className="me-2" />
            <label className="form-label">備註</label>
          </div>
          <textarea
            className="form-control"
            rows="2"
            placeholder="備註（如特殊配送需求）"
            value={formData.note}
            onChange={handleChange('note')}
          ></textarea>
        </div>

        {/* 按鈕 */}
        <div className="col-12 text-end">
          <button type="submit" className="btn-brand">下一步：確認訂單</button>
        </div>
      </form>
    </div>
  );
});

export default ShippingForm;

