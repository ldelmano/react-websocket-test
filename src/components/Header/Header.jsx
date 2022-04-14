import React from "react";
import "./styles.css";

const Header = ({ connectionStatus }) => {
  return (
    <div className="app-header">
      <p className="app-header__text">
        The WebSocket is currently {connectionStatus}
      </p>

      <div className="app-header__client-section">
        <p className="app-header__client-name">WILIOT</p>

        <p className="app-header__text">Test</p>
      </div>
    </div>
  );
};

export default Header;
