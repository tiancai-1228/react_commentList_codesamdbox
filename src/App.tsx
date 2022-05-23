import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [messageList, setMessageList] = useState<string[]>([]);
  // const form = document.forms[0];

  const handleMessage = () => {
    const message = document.forms[0].myMessage.value;
    if (message) {
      const messageAry = [...messageList, message];
      setMessageList(messageAry);
      localStorage.setItem("messageList", messageAry.join());
    }
  };

  useEffect(() => {
    const list = localStorage.getItem("messageList");
    if (list) {
      setMessageList(list.split(","));
    }
  }, []);
  return (
    <div className="App">
      <h1>leave a message demo app</h1>
      <form className="input">
        <textarea name="myMessage" rows={4} cols={60} required></textarea>
        <button
          type="button"
          className="submitBtn"
          onClick={() => {
            handleMessage();
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}
