import React, { useRef, useState } from "react";

export default function RecentViewed({
  products = [],
  cartItems = [],
  onAddToCart = () => {}
}) {
  const scrollRef = useRef(null);

  const handleAdd = (product) => {
    onAddToCart(product);
  };

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4 position-relative">
      <div className="card-header bg-white">
        <h5 className="mb-0">最近瀏覽商品</h5>
      </div>

      {/* 左按鈕 */}
      <button
        onClick={scrollLeft}
        className="btn-custom position-absolute top-50 start-0 translate-middle-y"
        style={{ zIndex: 10 }}
      >
        <img src="./icons/leftdefault.svg" alt="left" className="icon-default" width={40} height={40} />
        <img src="./icons/lefthover.svg" alt="left-hover" className="icon-hover" width={40} height={40} />
      </button>

      {/* 右按鈕 */}
      <button
        onClick={scrollRight}
        className="btn-custom position-absolute top-50 end-0 translate-middle-y"
        style={{ zIndex: 10 }}
      >
        <img src="./icons/rightdefault.svg" alt="right" className="icon-default" width={40} height={40} />
        <img src="./icons/righthover.svg" alt="right-hover" className="icon-hover" width={40} height={40} />
      </button>

      {/* 商品卡片列表 */}
      <div
        ref={scrollRef}
        className="d-flex overflow-auto gap-3 px-3 px-md-4 h-100 align-items-stretch no-scrollbar"
      >
        {products.map((product) => {
          const isAdded = cartItems.some(item => item.id === product.id);

          return (
            <div
              className="card border-0 shadow-sm d-flex flex-column"
              key={product.id}
              style={{ minWidth: 200, height: "100%" }}
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: 150, objectFit: "cover" }}
              />
              <div className="card-body p-2 d-flex flex-column justify-content-between">
                <div>
                  <div className="small text-truncate">{product.name}</div>
                  <div className="text-success fw-semibold small">NT${product.price}</div>
                </div>
                <button
                  className={`btn btn-sm mt-2 ${isAdded ? 'btn-secondary' : 'btn-outline-success'}`}
                  onClick={() => handleAdd(product)}
                  disabled={isAdded}
                >
                  {isAdded ? '✔ 已加入' : '加入購物袋'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


