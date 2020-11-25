import React from "react";

export const InputTodo = (props) => {
  const { inputText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input
        placeholder="todoを入力"
        type="text"
        value={inputText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
