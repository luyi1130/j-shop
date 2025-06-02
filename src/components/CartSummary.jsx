import React, { useEffect, useState } from "react";

export default function CartSummary({ cartItems, onNextStep, onUsePoints }) {
    const [availablePoints, setAvailablePoints] = useState(0);
    const [usedPoints, setUsedPoints] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        // 模擬 API 取得可用購物金
        setTimeout(() => {
            setAvailablePoints(100); // 假設會員有 100 點
        }, 300);
    }, []);

    const handlePointsChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        const number = parseInt(value, 10);

        if (isNaN(number)) {
            setError("請輸入數字");
            setUsedPoints(0);
            onUsePoints(0);
            return;
        }

        if (number < 0) {
            setError("不可為負數");
            setUsedPoints(0);
            onUsePoints(0);
            return;
        }

        if (number > availablePoints) {
            setError(`最多可折抵 ${availablePoints} 元`);
            setUsedPoints(0);
            onUsePoints(0);
            return;
        }

        setError("");
        setUsedPoints(number);
        onUsePoints(number); // 將已使用點數回傳給父元件
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = subtotal > 0 ? 60 : 0;
    const total = subtotal + shipping - usedPoints;

    return (
        <div className="card shadow-sm border-0 rounded-4 mb-4">
            <div className="card-body text-end">

                {/* 購物金折抵區塊 */}
                <div className="text-end mb-3">
                    <div className="text-muted small mb-1 d-inline-flex align-items-center gap-2">
                        <img src="./icons/point.svg" alt="購物金" style={{ width: 25, height: 25 }} />
                        <span>可用購物金：<strong>NT${availablePoints}</strong></span>
                    </div>

                    <div className="input-group input-group-sm mt-1" style={{ maxWidth: 200, marginLeft: 'auto' }}>


                        <input
                            type="number"
                            className="form-control"
                            placeholder="請輸入要折抵的金額"
                            value={inputValue}
                            onChange={handlePointsChange}
                            min={0}
                            max={availablePoints}
                        />
                    </div>
                    {error && <div className="text-danger small mt-1">{error}</div>}
                    {!error && usedPoints > 0 && (
                        <div className="text-brand small mt-1">已折抵 NT${usedPoints}</div>
                    )}
                </div>

                {/* 金額總結 */}
                <div className="mb-2 text-muted">小計：<span className="fw-semibold text-dark">NT${subtotal}</span></div>
                <div className="mb-2 text-muted">運費：<span className="fw-semibold text-dark">NT${shipping}</span></div>
                <div className="fs-5 fw-bold mb-3" style={{ color: "#3dce94" }}>
                    合計：NT${total < 0 ? 0 : total}
                </div>

                {onNextStep && (
                    <button
                        className="btn-brand"
                        onClick={onNextStep}
                        disabled={cartItems.length === 0}
                    >
                        下一步：填寫寄送方式
                    </button>
                )}
            </div>
        </div>
    );
}
