import "./_cases.scss";
import { useState } from "react";

const Cases = () => {
  const [input, setInput] = useState();
  const [newwords, setWord] = useState();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const name = () => {
    setWord(input);
  };

  const rodit = () => {
    // очень много повторяющегося кода, еще не доразбиралась как сократить не на чистом js, а в react js.
    console.log(input);
    let end = input.toLowerCase().slice(-1); // в эту переменную добавляем окончание введёного слова
    let start = input.toLowerCase().slice(0, -1); // в эту переменную помещаем введёное слово без окончания
    if (input == "") {
      alert("Поле не заполнено");
    } else if (end == "а" || end == "ь" || end == "я") {
      // с помощью условий подбираем нужное окончание
      const word = start + "и(ы)";
      setWord(word);
    } else if (end == "о") {
      const word = start + "а";
      setWord(word);
    } else if (end == "е") {
      const word = start + "я";
      setWord(word);
    } else {
      alert("Попробуйте другое слово");
    }
  };

  const dat = () => {
    let end = input.toLowerCase().slice(-1);
    let start = input.toLowerCase().slice(0, -1);
    if (input == "") {
      alert("Поле не заполнено");
    } else if (end == "а" || end == "я") {
      const word = start + "е";
      setWord(word);
    } else if (end == "о") {
      const word = start + "у";
      setWord(word);
    } else if (end == "е") {
      const word = start + "ю";
      setWord(word);
    } else if (end == "ь") {
      const word = start + "и";
      setWord(word);
    } else {
      alert("Попробуйте другое слово");
    }
  };

  const vinit = () => {
    let end = input.toLowerCase().slice(-1);
    let start = input.toLowerCase().slice(0, -1);
    if (input == "") {
      alert("Поле не заполнено");
    } else if (end == "а") {
      const word = start + "у";
      setWord(word);
    } else if (end == "я") {
      const word = start + "ю";
      setWord(word);
    } else if (end == "ь" || end == "о" || end == "е") {
      setWord(input);
    } else {
      alert("Попробуйте другое слово");
    }
  };

  const tvorit = () => {
    let end = input.toLowerCase().slice(-1);
    let start = input.toLowerCase().slice(0, -1);
    if (input == "") {
      alert("Поле не заполнено");
    } else if (end == "я") {
      const word = start + "ей(ею)";
      setWord(word);
    } else if (end == "а") {
      const word = start + "ой(ою)";
      setWord(word);
    } else if (end == "о") {
      const word = start + "ом";
      setWord(word);
    } else if (end == "е") {
      const word = start + "ем";
      setWord(word);
    } else if (end == "ь") {
      const word = start + "ью";
      setWord(word);
    } else {
      alert("Попробуйте другое слово");
    }
  };

  const predl = () => {
    let end = input.toLowerCase().slice(-1);
    let start = input.toLowerCase().slice(0, -1);
    if (input == "") {
      alert("Поле не заполнено");
    } else if (end == "а" || end == "я" || end == "о") {
      const word = start + "е";
      setWord(word);
    } else if (end == "ь" || end == "е") {
      const word = start + "и";
      setWord(word);
    } else {
      alert("Попробуйте другое слово");
    }
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
          value={input}
        />
        <div>
          {" "}
          <button onClick={name}>Именительный падеж</button>
          <button onClick={rodit}>Родительный падеж</button>
          <button onClick={dat}>Дательный падеж</button>
          <button onClick={vinit}>Винительный падеж</button>
          <button onClick={tvorit}>Творительный падеж</button>
          <button onClick={predl}>Предложный падеж</button>
        </div>
        <p>Результат:</p>
        <div className="wrapper-result">
          {" "}
          <div className="result">{newwords}</div>
        </div>
      </div>
    </>
  );
};

export default Cases;
