import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import CheckoutProgress from './components/CheckoutProgress';
import CartToggle from './components/CartToggle';
import CartSummary from './components/CartSummary';
import RecentViewed from './components/RecentViewed';
import ShippingForm from './components/ShippingForm';
import PaymentReview from './components/PaymentReview';

function App() {
  const [step, setStep] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(true); // step 1 預設開
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "鈣心定植物鈣", desc: "維鈣+D3雙效配方", price: 365, qty: 1 },
    { id: 2, name: "鈣心定植物鈣", desc: "維鈣+D3雙效配方", price: 365, qty: 1 },
  ]);
  const [usedCredits, setUsedCredits] = useState(100);
  const [availableCredits, setAvailableCredits] = useState(300);

  const [formData, setFormData] = useState({
    name: '陳素食',
    email: 'jaso12345@gmail.com',
    phone: '+886 900 123 4567',
    recipient: '陳素食',
    recipientPhone: '+886 900 123 4567',
    address: '台北市大安區仁愛路四段',
  });

  const shippingRef = useRef(null);

  // 每當 step 改變，第二、三步驟購物車自動收起，第一步驟自動展開
  useEffect(() => {
    if (step === 1) {
      setIsCartOpen(true);
    } else {
      setIsCartOpen(false);
    }
  }, [step]);

  const handleSubmitOrder = () => {
    alert("訂單已送出！");
  };

  return (
    <div className="container py-4">
      <div className="navbar navbar-light bg-light mb-3">
        <div className='container-fluid'>
          <span className='navbar-brand'>結帳流程</span>
        </div>
      </div>

      <CheckoutProgress step={step} />

      {step === 1 && (
        <>
          <CartToggle
            cartItems={cartItems}
            setCartItems={setCartItems}
            isOpen={isCartOpen}
            setIsOpen={setIsCartOpen}
          />
          <CartSummary
            cartItems={cartItems}
            onNextStep={() => {
              setStep(2);
              setTimeout(() => {
                shippingRef.current?.scrollIntoView({ behavior: 'smooth' });
              }, 0);
            }}
          />
          <RecentViewed />
        </>
      )}

      {step === 2 && (
        <>
          <CartToggle
            cartItems={cartItems}
            setCartItems={setCartItems}
            isOpen={isCartOpen}
            setIsOpen={setIsCartOpen}
          />
          <CartSummary cartItems={cartItems} />
          <div ref={shippingRef}>
            <ShippingForm
              onNextStep={() => setStep(3)}
              setFormData={setFormData}
            />
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <CartToggle
            cartItems={cartItems}
            setCartItems={setCartItems}
            isOpen={isCartOpen}
            setIsOpen={setIsCartOpen}
          />
          <CartSummary cartItems={cartItems} />
          <PaymentReview
            formData={formData}
            cartItems={cartItems}
            usedCredits={usedCredits}
            availableCredits={availableCredits}
            onBack={() => setStep(2)}
            onSubmit={handleSubmitOrder}
          />
        </>
      )}
    </div>
  );
}

export default App;

