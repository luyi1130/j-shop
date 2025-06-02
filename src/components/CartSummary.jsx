export default function CartSummary({ cartItems, onNextStep }) {
  // 小計 = 商品單價 * 數量 加總
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const shipping = subtotal > 0 ? 60 : 0; // 運費條件，沒商品就免運（你可依需求調整）

  const total = subtotal + shipping;

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      <div className="card-body text-end">
        <div className="mb-2 text-muted">小計：<span className="fw-semibold text-dark">NT${subtotal}</span></div>
        <div className="mb-2 text-muted">運費：<span className="fw-semibold text-dark">NT${shipping}</span></div>
        <div className="fs-5 fw-bold mb-3" style={{ color: '#3dce94' }}>
          合計：NT${total}
        </div>
        <button
          className="btn-brand"
          onClick={onNextStep}
          disabled={cartItems.length === 0}
        >
          下一步：填寫寄送方式
        </button>
      </div>
    </div>
  );
}