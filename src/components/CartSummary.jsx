import React from "react";

export default function CartSummary() {
    return (
        <div className="card shadow-sm border-0 rounded-4 mb-4">
            <div className="card-body text-end">
                <div className="mb-2 text-muted">小計：<span className="fw-semibold text-dark">NT$730</span></div>
                <div className="mb-2 text-muted">運費：<span className="fw-semibold text-dark">NT$60</span></div>
                <div className="fs-5 fw-bold mb-3" style={{ color: '#3dce94' }}>
                    合計：NT$790
                </div>
                {/* <button className="btn btn-success px-4 shadow-sm"> </button> */}
                <button className="btn btn-brand px-4 shadow-sm" >
                    下一步：填寫寄送方式
                </button>

            </div>
        </div>
    );
}