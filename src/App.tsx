import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css"

function App() {
  const { confirm } = Modal;
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const showModalWithIcon = () => {
    confirm({
      title: "Do you want to approve this activity and all its session(s)?",
      icon: <ExclamationCircleOutlined/>,
      content: "Please make sure that you have read through all the details as the sessions will be live upon approved.",
      onOk() {
        console.log("OK")
      },
      onCancel() {
        console.log("Cancel")
      }
    })
  }

  const onModalOk = () => {
    console.log("onModalOk");
    setModalVisible(false);
  };

  const onModalCancel = () => {
    console.log("onModalCancel");
    setModalVisible(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Button type="primary" onClick={ () => showModal() }>Approve this activity</Button>
        <Button type="primary" onClick={ () => showModalWithIcon() }>Another Approve Activity</Button>
      </header>
      <Modal
        title="This is a basic modal"
        visible={ modalVisible }
        onOk={ () => onModalOk() }
        onCancel={ () => onModalCancel() }
        >
        Please make sure
      </Modal>
    </div>
  );
}

export default App;
