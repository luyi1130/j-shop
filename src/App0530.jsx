import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import CheckoutProgress from './components/CheckoutProgress';
import CartToggle from './components/CartToggle';
import CartSummary from './components/CartSummary';
import RecentViewed from './components/RecentViewed';
import ShippingForm from './components/ShippingForm';
import PaymentForm from './components/PaymentForm';
import PaymentReview from './components/PaymentReview';
import OrderSuccess from './components/OrderSuccess';

function App() {
  const [step, setStep] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "鈣心定植物鈣", desc: "維鈣+D3雙效配方", price: 365, qty: 1 },
    { id: 2, name: "鈣心定植物鈣", desc: "維鈣+D3雙效配方", price: 365, qty: 1 },
  ]);
  const [usedCredits, setUsedCredits] = useState(100);
  const [availableCredits, setAvailableCredits] = useState(300);
  const [orderNumber, setOrderNumber] = useState(null);

  const [formData, setFormData] = useState({
    name: '陳素食',
    email: 'jaso12345@gmail.com',
    phone: '+886 900 123 4567',
    recipient: '陳素食',
    recipientPhone: '+886 900 123 4567',
    address: '台北市大安區仁愛路四段',
    paymentMethod: 'credit_card',
    invoiceType: 'mobile',
    invoiceNumber: '',
    carrierNumber: '/',
    creditCardNumber: '',
    expiryDate: '',
    cardHolder: '',
    securityCode: '',
    shippingMethod: ''
  });

  const [localForm, setLocalForm] = useState({
    name: '',
    email: '',
    phone: '',
    recipient: '',
    recipientPhone: '',
    address: '', // 你可以保留這個欄位當作「宅配地址」或未來擴充用
    shippingMethod: '', // ✅ 新增這個
    note: ''
  });

  const shippingRef = useRef(null);

  useEffect(() => {
    setIsCartOpen(step === 1);
  }, [step]);

  const handleSubmitOrder = () => {
    const generatedOrderNumber = 'JS' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    setOrderNumber(generatedOrderNumber);
    setStep(5);
  };

  return (
    <div className="container py-4">
      <div className="navbar navbar-light bg-light mb-3">
        <div className='container-fluid'>
          <span className='navbar-brand'>結帳流程</span>
        </div>
      </div>

      <CheckoutProgress step={step} />

      {/* Step 1: 購物車 */}
      {step === 1 && (
        <>
          <CartToggle cartItems={cartItems} setCartItems={setCartItems} isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
          <CartSummary cartItems={cartItems} onNextStep={() => {
            setStep(2);
            setTimeout(() => {
              shippingRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 0);
          }} />
          <RecentViewed />
        </>
      )}

      {/* Step 2: 配送資訊 */}
      {step === 2 && (
        <>
          <CartToggle cartItems={cartItems} setCartItems={setCartItems} isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
          <CartSummary cartItems={cartItems} />
          <div ref={shippingRef}>
            <ShippingForm formData={formData} setFormData={setFormData} onNextStep={() => setStep(3)} />
          </div>
        </>
      )}

      {/* Step 3: 付款方式與發票 */}
      {step === 3 && (
        <>
          <CartToggle cartItems={cartItems} setCartItems={setCartItems} isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
          <CartSummary cartItems={cartItems} />
          <PaymentForm formData={formData} setFormData={setFormData} />
          <div className="text-end mt-3">
            <button className="btn btn-outline-secondary me-2" onClick={() => setStep(2)}>上一步</button>
            <button className="btn btn-brand" onClick={() => setStep(4)}>下一步</button>
          </div>
        </>
      )}

      {/* Step 4: 付款確認 */}
      {step === 4 && (
        <>
          <CartToggle cartItems={cartItems} setCartItems={setCartItems} isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
          <CartSummary cartItems={cartItems} />
          <PaymentReview
            formData={formData}
            cartItems={cartItems}
            usedCredits={usedCredits}
            availableCredits={availableCredits}
            onBack={() => setStep(3)}
            onSubmit={handleSubmitOrder}
          />
        </>
      )}

      {/* Step 5: 訂單成功 */}
      {step === 5 && (
        <OrderSuccess orderNumber={orderNumber} />
      )}
    </div>
  );
}

export default App;



