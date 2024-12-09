import React, { useState, useEffect } from "react";
import MainLayout from "../Layouts/MainLayout";

const Payment = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];
    const storedTotalPrice = localStorage.getItem("totalPrice") || 0;
    const storedTotalItems = localStorage.getItem("totalItems") || 0;

    setItems(storedItems);
    setTotalPrice(Number(storedTotalPrice));
    setTotalItems(Number(storedTotalItems));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تمت عملية الدفع بنجاح! شكراً لتعاملكم معنا.");
    localStorage.removeItem("selectedItems");
    localStorage.removeItem("totalPrice");
    localStorage.removeItem("totalItems");
  };

  return (
    <MainLayout>
      <div
        style={{
          background: "linear-gradient(135deg, #50C9C3, #96DEDA)",
          padding: "4rem 2rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", fontWeight: "bold" }}>
          الدفع
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
          أكمل معلومات الدفع لإتمام الطلب بسهولة وأمان.
        </p>
      </div>

      <div className="container my-5" style={{ direction: "rtl" }}>
        <div className="row">
          {/* تفاصيل الطلب */}
          <div className="col-md-6 mb-4">
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "2rem",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 style={{ color: "#50C9C3", marginBottom: "1rem" }}>تفاصيل الطلب:</h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginBottom: "1rem",
                }}
              >
                {items.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "0.5rem",
                      padding: "0.5rem",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    {item.name} × {item.quantity} -{" "}
                    <span style={{ color: "#50C9C3" }}>
                      {item.quantity * item.price} ريال
                    </span>
                  </li>
                ))}
              </ul>
              <h4>عدد الأصناف: {totalItems}</h4>
              <h4>الإجمالي: {totalPrice} ريال</h4>
            </div>
          </div>

          {/* نموذج الدفع */}
          <div className="col-md-6">
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "2rem",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 style={{ color: "#50C9C3", marginBottom: "1rem" }}>معلومات الدفع:</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={paymentInfo.name}
                    onChange={handleInputChange}
                    required
                    style={{ border: "1px solid #50C9C3" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">
                    رقم البطاقة
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentInfo.cardNumber}
                    onChange={handleInputChange}
                    required
                    style={{ border: "1px solid #50C9C3" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="expiryDate" className="form-label">
                    تاريخ الانتهاء
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={paymentInfo.expiryDate}
                    onChange={handleInputChange}
                    required
                    style={{ border: "1px solid #50C9C3" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="cvv"
                    name="cvv"
                    value={paymentInfo.cvv}
                    onChange={handleInputChange}
                    required
                    style={{ border: "1px solid #50C9C3" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: "#50C9C3",
                    color: "#fff",
                    padding: "0.8rem 1.5rem",
                    borderRadius: "5px",
                    textDecoration: "none",
                    width: "100%",
                  }}
                >
                  إتمام الدفع
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Payment;
