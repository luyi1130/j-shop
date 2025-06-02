import React from 'react';
import CheckoutProgress from './components/CheckoutProgress';
import CartToggle from './components/CartToggle';
import CartSummary from './components/CartSummary';
import RecentViewed from './components/RecentViewed';

function App() {
  return (
    <div className="container py-4">
      {/* nav bar */}
      < div className="navbar navbar-light bg-light">
      <div className='container-fluid'>
        <span className='navbar-brand'></span>
      </div>
      </div>
      <CheckoutProgress step={1} />
      <CartToggle />
      <CartSummary />
      <RecentViewed />
      
    </div>
  );
}


export default App;
