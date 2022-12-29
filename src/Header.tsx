import "./Header.css";
import ReactDOM from "react-dom";
import React from "react";
import Modal from "./Modal";

function Header({ onModalClick, isModalOpen }: { isModalOpen: boolean, onModalClick: () => void }) {
  return (
    <header className="header_container">
      <div className="icon">
        🔥
      </div>
      <div className="icon" style={{ cursor: "pointer" }} onClick={onModalClick}>
        👤
      </div>

      {isModalOpen && ReactDOM.createPortal(<Modal />, document.querySelector("#modal-root")!)}
    </header>
  );
}

export default Header;