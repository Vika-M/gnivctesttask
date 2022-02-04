import "./_cases.scss";
import { useState } from "react";

const Cases = () => {
  const [input, setInput] = useState();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h1> Падежи в русском языке</h1>
        <h2>
          {" "}
          Чтобы поставить слово в нужный тебе падеж: введи в поле ввода одно
          существительное в именительном падеже в единственном числе, выбери
          кнопку с названием падежа.
        </h2>
        <input
          className="inputCase"
          type="text"
          onChange={(e) => handleInput(e)}
        />
        <div>
          {" "}
          <button>Именительный падеж</button>
          <button>Родительный падеж</button>
          <button>Дательный падеж</button>
          <button>Винительный падеж</button>
          <button>Творительный падеж</button>
          <button>Предложный падеж</button>
        </div>
        <p>Результат:</p>
        <div className="result"></div>
      </div>
    </>
  );
};

export default Cases;
