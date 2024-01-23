import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todo, setTodo] = useState("");

  return (
    <div>
      <div class="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <form class="add-form">
        <div class="input-group">
          <label class="form-label">제목</label>
          <input
            type="text"
            name="title"
            class="add-input input-body"
            value
          ></input>
          
          <label class="form-label">내용</label>
          <input type="text" name="body" class="add-input" value></input>
        </div>
        <button class="add-button" onClick={() => {
          setContent(content);
        }}>등록하기</button>
        
      </form>
      <div class="list-container">
        <h2 class="list-title">Working!!!</h2>
        <div class="list-wrapper">
          <div>
            <h2 class="todo-title">리액트 공부!</h2>
            <div>리액트 기초를 공부하자!</div>
          </div>
          <div class="button-set">
            <button class="todo-delete-button button" onClick={() => {
              setTodo(todo);
            }}>완료</button>
            <button class="todo-delete-button button"  onClick={() => {
              setTodo(todo);
            }}>삭제하기</button>
          </div>
        </div>
      </div>
      <h2 class="list-title">Done...!</h2>
      <div class="list-wrapper">
        <div class="todo-container">
          <div>
            <h2 class="todo-title">리액트 공부하자</h2>
            <div>리액트 기초를 공부하자</div>
          </div>
          <button class="todo-delete-button button"  onClick={() => {
              setTodo(todo);
            }}>취소</button>
          <button class="todo-delete-button button"  onClick={() => {
              setTodo(todo);
            }}>삭제하기</button>
        </div>
      </div>
    </div>
  );
}

export default App;
