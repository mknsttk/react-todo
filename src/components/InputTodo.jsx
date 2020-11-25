import React from "react";

export const InputTodo = (props) => {
  const { inputText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        placeholder="todoを入力"
        type="text"
        value={inputText}
        onChange={onChange}
        disabled={disabled}
      />
      <button onClick={onClick} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
