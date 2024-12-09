import React, { useState } from "react";
import Mainlayout from "../Layouts/MainLayout";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?t=st=1714213671~exp=1714217271~hmac=d6ff108916c006dda6cc2e21999f8274d6e9abe8e22b4404c8ad77f30e7329e8&w=740",
      name: "شاورما",
      price: 30,
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?t=st=1714213943~exp=1714217543~hmac=9d06ce2d4fdfdf3788ff3e5cae72d904b9003e64a6971c59c05783a680bc2978&w=740",
      name: "هامبرجر",
      price: 15,
    },
    {
      id: 3,
      img: "https://img.freepik.com/premium-psd/psd-saudi-food-kabsa-isolated-without-background_867452-12773.jpg?w=740",
      name: "برياني باللحم",
      price: 13,
    },
  ];
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const handleQuantityChange = (item, event) => {
    const quantity = Number(event.target.value);
    const existingItem = selectedItems.find((i) => i.id === item.id);
    const previousQuantity = existingItem ? existingItem.quantity : 0;

    const priceDifference = (quantity - previousQuantity) * item.price;
    setTotalPrice((prev) => prev + priceDifference);
    setTotalItems((prev) => prev + (quantity - previousQuantity));

    if (quantity > 0) {
      const updatedItems = selectedItems.filter((i) => i.id !== item.id);
      setSelectedItems([...updatedItems, { ...item, quantity }]);
    } else {
      setSelectedItems((prev) => prev.filter((i) => i.id !== item.id));
    }
  };

  return (
    <Mainlayout>
      <div
        style={{
          background: "linear-gradient(135deg, #FF6F61, #FFC371)",
          padding: "4rem 2rem",
          textAlign: "center",
          color: "white",
          direction: "rtl",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", fontWeight: "bold" }}>
          قائمة الطعام
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
          اختر الأطباق المفضلة لديك واستمتع بوجبة شهية!
        </p>
      </div>

      <div className="container my-5" style={{ direction: "rtl" }}>
        <div className="row">
          {menuItems.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div
                style={{
                  border: "1px solid #eee",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  textAlign: "center",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "1rem" }}>
                  <h3 style={{ fontSize: "1.5rem", color: "#FF6F61" }}>{item.name}</h3>
                  <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                    {item.price} ريال
                  </p>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    value={
                      selectedItems.find((i) => i.id === item.id)?.quantity || 0
                    }
                    onChange={(e) => handleQuantityChange(item, e)}
                    style={{
                      textAlign: "center",
                      marginTop: "1rem",
                      border: "1px solid #FF6F61",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedItems.length > 0 && (
          <div
            style={{
              background: "linear-gradient(135deg, #56C9C3, #969EDA)",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              color: "#333",
            }}
          >
            <h3>العناصر المختارة</h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginBottom: "1rem",
                textAlign: "right",
              }}
            >
              {selectedItems.map((item) => (
                <li key={item.id} style={{ marginBottom: "0.5rem" }}>
                  {item.name} × {item.quantity} -{" "}
                  <span style={{ color: "#FF6F61" }}>
                    {item.quantity * item.price} ريال
                  </span>
                </li>
              ))}
            </ul>
            <h4>عدد الأصناف: {totalItems}</h4>
            <h4>المجموع الكلي: {totalPrice} ريال</h4>
            <a
              href="/payment"
              className="btn"
              style={{
                backgroundColor: "#FF6F61",
                color: "#fff",
                padding: "0.8rem 1.5rem",
                borderRadius: "5px",
                textDecoration: "none",
              }}
              onClick={(e) => {
                e.preventDefault();
                localStorage.setItem(
                  "selectedItems",
                  JSON.stringify(selectedItems)
                );
                localStorage.setItem("totalPrice", totalPrice);
                localStorage.setItem("totalItems", totalItems);
                window.location.href = "/payment";
              }}
            >
              إتمام الطلب
            </a>
          </div>
        )}
      </div>
    </Mainlayout>
  );
};

export default Menu;
