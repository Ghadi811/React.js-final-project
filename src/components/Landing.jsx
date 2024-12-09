/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import Mainlayout from "../Layouts/MainLayout";

const Landing = () => {
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);

  const startGame = () => {
    setGameActive(true);
    setScore(0);

    const gameInterval = setInterval(() => {
      const dish = document.createElement("div");
      dish.className = "falling-dish";
      dish.style.left = Math.random() * 90 + "vw";
      document.body.appendChild(dish);

      const fallInterval = setInterval(() => {
        const top = parseFloat(getComputedStyle(dish).top);
        if (top > window.innerHeight - 100) {
          clearInterval(fallInterval);
          dish.remove();
        } else {
          dish.style.top = top + 5 + "px";
        }
      }, 30);

      dish.addEventListener("click", () => {
        clearInterval(fallInterval);
        dish.remove();
        setScore((prevScore) => prevScore + 1);
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(gameInterval);
      setGameActive(false);
      alert(`انتهت اللعبة! مجموع نقاطك: ${score}`);
    }, 15000); // مدة اللعبة 15 ثانية
  };

  return (
    <>
      <Mainlayout>
        {/* قسم البطل */}
        <div
          style={{
            background: "linear-gradient(135deg, #FF6F61, #FFC371)",
            padding: "5rem 2rem",
            textAlign: "center",
            color: "white",
            direction: "rtl",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem", fontWeight: "bold" }}>
            ليس مجرد طعام، إنه تجربة.
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
            استمتع بالنكهات الشهية والمكونات الطازجة التي تضيف لمسة مميزة لكل طبق.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <button
              style={{
                backgroundColor: "#FF6F61",
                color: "#fff",
                padding: "0.8rem 1.5rem",
                border: "none",
                borderRadius: "5px",
                fontSize: "1.1rem",
                cursor: "pointer",
                marginRight: "1rem",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => (window.location.href = "/menu")}
            >
              تصفح القائمة
            </button>

          </div>
        </div>


         {/* قسم اللعبة */}
         <div
          style={{
            background: "linear-gradient(135deg, #56C9C3, #969EDA)",
            padding: "4rem 2rem",
            textAlign: "center",
            color: "#333",
            direction: "rtl",
          }}
        >
          <div
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              padding: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                fontWeight: "bold",
                color: "#FF6F61",
              }}
            >
              العب بينما تنتظر!
            </h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem", color: "#555" }}>
              اضغط على الأطباق التي تسقط لجمع النقاط! حاول تحقيق أعلى مجموع في 15 ثانية.
            </p>
            {!gameActive && (
              <button
                style={{
                  backgroundColor: "#FF6F61",
                  color: "#fff",
                  padding: "0.8rem 1.5rem",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
                onClick={startGame}
              >
                ابدأ اللعبة
              </button>
            )}
            {gameActive && (
              <div
                style={{
                  marginTop: "1rem",
                  fontSize: "1.5rem",
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                النقاط: {score}
              </div>
            )}
          </div>
        </div>
      </Mainlayout>

      {/* أنماط اللعبة */}
      <style>
        {`
          .falling-dish {
            position: fixed;
            top: 0;
            width: 50px;
            height: 50px;
            background: url('https://img.icons8.com/color/96/food.png') no-repeat center;
            background-size: contain;
            cursor: pointer;
            z-index: 1000;
            animation: rotate-dish 1.5s linear infinite;
          }

          @keyframes rotate-dish {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </>
  );
};

export default Landing;
