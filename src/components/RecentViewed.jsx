import React, { useRef } from "react";

export default function RecentViewed() {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <div className="card shadow-sm border-0 rounded-4 mb-4 position-relative">
            <div className="card-header bg-white">
                <h5 className="mb-0">最近瀏覽商品</h5>
            </div>

            <div className="card-body py-4 position-relative" style={{ height: 260 }}>
                {/* 左右按鈕 */}
                <button
                    onClick={scrollLeft}
                    className="btn btn-light shadow-sm position-absolute top-50 start-0 translate-middle-y"
                    style={{
                        zIndex: 10,
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e9ecef")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                >
                    <i className="bi bi-chevron-left"></i>
                </button>

                <button
                    onClick={scrollRight}
                    className="btn btn-light shadow-sm position-absolute top-50 end-0 translate-middle-y"
                    style={{
                        zIndex: 10,
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e9ecef")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                >
                    <i className="bi bi-chevron-right"></i>
                </button>

                {/* 商品卡片列表 */}
                <div
                    ref={scrollRef}
                    className="d-flex overflow-auto gap-3 px-3 px-md-4 h-100 align-items-stretch"
                >
                    {[1, 2, 3, 4, 5, 6].map((item, i) => (
                        <div
                            className="card border-0 shadow-sm d-flex flex-column"
                            key={i}
                            style={{ minWidth: 200, height: "100%" }}
                        >
                            <img
                                src="./images/B12-default.png"
                                className="card-img-top"
                                alt="商品"
                                style={{ height: 150, objectFit: "cover" }}
                            />
                            <div className="card-body p-2 d-flex flex-column justify-content-between">
                                <div className="small text-truncate">鈣心定植物鈣</div>
                                <div className="text-success fw-semibold small">NT$365</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

