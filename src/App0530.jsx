import './App.css';
import React, { useState } from 'react';
import CheckoutProgress from './components/CheckoutProgress';
import CartToggle from './components/CartToggle';
import CartSummary from './components/CartSummary';
import RecentViewed from './components/RecentViewed';
import ShippingForm from './components/ShippingForm';

function App() {
  const [step, setStep] = useState(1);

  // ✅ 提升 cartItems 狀態到 App
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "鈣心定植物鈣", desc: "維鈣+D3雙效配方", price: 365, qty: 1 },
    { id: 2, name: "鈣心定植物鈣", desc: "維鈣+D3雙效配方", price: 365, qty: 1 },
  ]);

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
          <ShippingForm onNextStep={() => setStep(3)} />
        </>
      )}

    
    </div>
  );
}

export default App;
