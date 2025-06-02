import './App.css';
import React, { useState } from 'react';
import CheckoutProgress from './components/CheckoutProgress';
import CartToggle from './components/CartToggle';
import CartSummary from './components/CartSummary';
import RecentViewed from './components/RecentViewed';
import ShippingForm from './components/ShippingForm';
import PaymentReview from './components/PaymentReview';

function App() {
  const [step, setStep] = useState(1);

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "鈣心定植物鈣", desc: "維鈣+D3雙效配方", price: 365, qty: 1 },
    { id: 2, name: "鈣心定植物鈣", desc: "維鈣+D3雙效配方", price: 365, qty: 1 },
  ]);

  const [usedCredits, setUsedCredits] = useState(100); // 假設使用了 100 元購物金
  const [availableCredits, setAvailableCredits] = useState(300); // 假設帳戶有 300 元

  // 假設從 ShippingForm 中收集到的表單資料
  const [formData, setFormData] = useState({
    name: '陳素食',
    email: 'jaso12345@gmail.com',
    phone: '+886 900 123 4567',
    recipient: '陳素食',
    recipientPhone: '+886 900 123 4567',
    address: '台北市大安區仁愛路四段',
  });

  const handleSubmitOrder = () => {
    alert("訂單已送出！");
    // 你可以在這裡接 API 發送訂單
  };

  return (
    <div className="container py-4">
      {/* Nav bar */}
      <div className="navbar navbar-light bg-light mb-3">
        <div className='container-fluid'>
          <span className='navbar-brand'>結帳流程</span>
        </div>
      </div>

      {/* Step Indicator */}
      <CheckoutProgress step={step} />

      {/* Step 1：購物車頁面 */}
      {step === 1 && (
        <>
          <CartToggle cartItems={cartItems} setCartItems={setCartItems} />
          <CartSummary cartItems={cartItems} onNextStep={() => setStep(2)} />
          <RecentViewed />
        </>
      )}

      {/* Step 2：寄送資訊頁面 */}
      {step === 2 && (
        <>
          <CartToggle cartItems={cartItems} setCartItems={setCartItems} />
          <CartSummary cartItems={cartItems} />
          <ShippingForm
            onNextStep={() => setStep(3)}
            setFormData={setFormData} // 如果 ShippingForm 要回傳資料
          />
        </>
      )}

      {/* ✅ Step 3：確認付款資料 */}
      {step === 3 && (
        <PaymentReview
          formData={formData}
          cartItems={cartItems}
          usedCredits={usedCredits}
          availableCredits={availableCredits}
          onBack={() => setStep(2)}
          onSubmit={handleSubmitOrder}
        />
      )}
    </div>
  );
}
export default App;