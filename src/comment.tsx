import "./comment.css";
import React, { useState, useEffect } from "react";
interface commentProp {
  title: string;
  name: string;
}
const comment = ({ title, name }: commentProp) => {
  const [replyList, setrReplyList] = useState<string[]>([]);

  const handleComment = () => {
    const message = document.getElementById(title).value;
    if (message) {
      const replyAry = [...replyList, message];
      setrReplyList(replyAry);
      localStorage.setItem(title, replyAry.join());
    }
  };

  const reply = () => {
    const list = replyList.map((message: string, index: number) => (
      <p className="replyText" key={index}>
        {message}
      </p>
    ));
    return list.reverse();
  };
  useEffect(() => {
    const list = localStorage.getItem(title);
    if (list) {
      setrReplyList(list.split(","));
    }
  }, []);
  return (
    <>
      <div className="content">
        <h2 className="title">{title}</h2>
        <h3 className="name">{name}</h3>
        <form className="commentText">
          <textarea
            id={title}
            rows={4}
            placeholder={"leave a reply"}
            required
          ></textarea>
          <button
            type="button"
            className="submitBtn"
            onClick={() => {
              handleComment();
            }}
          >
            submit
          </button>
        </form>
        <h3 className="reply">reply</h3>
        {reply()}
      </div>
    </>
  );
};
export default comment;
