import React from "react";
import Mainlayout from "../Layouts/MainLayout";

const CallMe = () => {
  return (
    <Mainlayout>
    <div
      style={{
        background: "linear-gradient(90deg, #4a90e2, #50b5a9)",
        color: "white",
        minHeight: "100vh",
        padding: "4rem 2rem",
        direction: "rtl", // جعل النصوص من اليمين إلى اليسار
      }}
    >
      <div className="container text-center">
        {/* قسم العنوان */}
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>اتصل بنا</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          يسعدنا سماع آرائكم! أرسلوا لنا رسالة باستخدام النموذج أدناه أو تواصلوا معنا عبر معلومات الاتصال.
        </p>

        <div className="row">
          {/* نموذج الاتصال */}
          <div className="col-md-6">
            <form
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{ color: "#4a90e2" }}>
                  الاسم
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="اسمك الكامل"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{ color: "#4a90e2" }}>
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="بريدك الإلكتروني"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label" style={{ color: "#4a90e2" }}>
                  الرسالة
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="رسالتك"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn"
                style={{
                  background: "#50b5a9",
                  color: "white",
                  padding: "0.6rem 1.5rem",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "1rem",
                }}
              >
                إرسال
              </button>
            </form>
          </div>

          {/* تفاصيل الاتصال */}
          <div className="col-md-6 mt-4 mt-md-0 text-start">
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>تواصل معنا</h3>
            <p style={{ fontSize: "1rem" }}>
              <strong>العنوان:</strong> 1234 شارعنا، مدينتنا، بلدنا
            </p>
            <p style={{ fontSize: "1rem" }}>
              <strong>البريد الإلكتروني:</strong>{" "}
              <a href="mailto:info@mysite.com" style={{ color: "white", textDecoration: "none" }}>
                info@mysite.com
              </a>
            </p>
            <p style={{ fontSize: "1rem" }}>
              <strong>الهاتف:</strong> +123 456 7890
            </p>
            <div className="mt-3">
              {/* روابط التواصل الاجتماعي */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
                style={{ fontSize: "1.5rem" }}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
                style={{ fontSize: "1.5rem" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
                style={{ fontSize: "1.5rem" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
                style={{ fontSize: "1.5rem" }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Mainlayout>
  );
};

export default CallMe;
