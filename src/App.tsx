import "./styles.css";
import React, { useState, useEffect } from "react";
import Comment from "./comment";
export default function App() {
  const [messageList, setMessageList] = useState<string[]>([]);

  const handleMessage = () => {
    const message = document.forms[0].myMessage.value;
    if (message) {
      const messageAry = [...messageList, message];
      setMessageList(messageAry);
      localStorage.setItem("messageList", messageAry.join());
    }
  };

  const commentList = () => {
    const list = messageList.map((name: string, index: number) => (
      <Comment title={`Comment ${index + 1}`} name={name} key={index} />
    ));
    return list.reverse();
  };

  useEffect(() => {
    const list = localStorage.getItem("messageList");
    if (list) {
      setMessageList(list.split(","));
    }
  }, []);

  return (
    <div className="App">
      <h1 className="h1">leave a message demo app</h1>
      <form className="input">
        <textarea
          name="myMessage"
          rows={4}
          cols={60}
          placeholder={"leave a comment"}
          required
        ></textarea>
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
      <div className="comment">{commentList()}</div>
    </div>
  );
}
