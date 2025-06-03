import React from 'react';

import { CheckCircle } from 'react-bootstrap-icons';

export default function OrderSuccess({ orderNumber }) {
  return (
    <div className="text-center py-5">
      <CheckCircle size={80} className="text-success mb-4" />
      <h3 className="mb-3">感謝您的訂購！</h3>
      <p className="fs-5">您的訂單已成功成立，訂單編號如下：</p>
      <h4 className="fw-bold text-primary">#{orderNumber}</h4>
      <p className="mt-4">系統已寄送確認信至您的信箱。</p>
      <a href="/" className="btn btn-brand mt-4">返回購物車</a>
    </div>
  );
}
 