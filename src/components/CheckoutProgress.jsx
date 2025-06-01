import React from "react";

export default function CheckoutProgress({ step }) {
  const steps = ["購物車", "寄送方式", "結帳資料", "訂購完成"];

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      {steps.map((label, i) => (
        <div key={i} className="text-center flex-fill">
          <div
            className={`rounded-circle mx-auto mb-1 d-flex align-items-center justify-content-center ${
              i < step ? '' : 'bg-light border'
            }`}
            style={{
              width: 36,
              height: 36,
              backgroundColor: i < step ? '#3dce94' : undefined,
              color: i < step ? 'white' : undefined,
            }}
          >
            {i + 1}
          </div>
          <div
            className="small"
            style={{
              fontWeight: i <= step ? 'bold' : undefined,
              color: i <= step ? '#3dce94' : '#6c757d', // muted fallback
            }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}