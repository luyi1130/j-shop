import React from 'react';

function ShippingForm({ onNextStep }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // 可加驗證邏輯
        onNextStep(); // 進入下一步
    };

    return (
        <>
            {/* 大標區塊 */}
            <div className="bg-light card border-0 rounded-4 mb-3 py-2">
                <div className="card-body py-2">
                    <h5 className="mb-0">填寫資料</h5>
                </div>
            </div>

            {/* 表單內容 */}
            <form className="row g-3 mt-1" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label className="form-label">收件人姓名</label>
                    <input type="text" className="form-control" placeholder="請輸入收件人姓名" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">聯絡電話</label>
                    <input type="text" className="form-control" placeholder="例如：0912-345-678" />
                </div>
                <div className="col-12">
                    <label className="form-label">地址</label>
                    <input type="text" className="form-control" placeholder="請輸入完整地址" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="example@mail.com" />
                </div>
                <div className="col-12">
                    <label className="form-label">備註</label>
                    <textarea className="form-control" rows="2" placeholder="備註（如特殊配送需求）"></textarea>
                </div>
                <div className="col-12 text-end">
                    <button type="submit" className="btn-brand">下一步：確認訂單</button>
                </div>
            </form>
        </>
    );
}

export default ShippingForm;
