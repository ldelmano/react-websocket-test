import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Header from "./components/Header/Header";
import DataView from "./components/DataView/DataView";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import useWebSocket, { ReadyState } from "react-use-websocket";

const App = () => {
  const socketUrl = "ws://localhost:8999";
  const [messageHistory, setMessageHistory] = useState([]);

  const { lastJsonMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => toast("Connection is Open"),
    onClose: () => toast("Connection is Closed"),
  });

  useEffect(() => {
    const fiveMinutesEarlier = Date.now() - 5 * 60 * 1000;

    if (lastJsonMessage !== null) {
      const validEntry = lastJsonMessage.map(val => {
        const value = {
          ...val,
          data: val.data > 100 ? null : val.data,
        };
        return value;
      });

      setMessageHistory(prev => [
        ...prev.filter(val => val.timestamp > fiveMinutesEarlier),
        ...validEntry,
      ]);
    }
  }, [lastJsonMessage, setMessageHistory]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <div className="app">
      <Header connectionStatus={connectionStatus} />

      <div className="app-container">
        <DataView history={messageHistory} last={lastJsonMessage} />
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
