/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Comment.css";
const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        disabled={localStorage.getItem("status") === null}
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập bình luận của bạn..."
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Hủy Bỏ
        </button>
      )}
    </form>
  );
};

export default CommentForm;
