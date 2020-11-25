import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete, disabled } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のタスク</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-item">
              <li>{todo}</li>
              <button disabled onClick={() => onClickComplete(index)}>
                完了
              </button>
              <button disabled onClick={() => onClickDelete(index)}>
                削除
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
