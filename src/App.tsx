import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css"

interface ConfirmApproveActivityModalProps {
  modalVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmApproveActivityModal: React.FC<ConfirmApproveActivityModalProps> = ({ modalVisible, onConfirm, onCancel}) => {
  const contentStyle = {
    left: "32px",
    top: "32px",
    position: "static"
  }
  const iconStyle = {
    width: "22px",
    height: "22px"
  }
  return (
    <Modal
      visible={ modalVisible }
      footer={null}
    >
      <div>
        <ExclamationCircleOutlined style={ iconStyle }/>
        <Button onClick={ () => onCancel() }>Cancel</Button>
        <Button onClick={ () => onConfirm() }>Yes, Approve</Button>
      </div>
    </Modal>
  )
}

const { confirm } = Modal;

interface ConfirmationDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean
}

const ShowConfirmationDialog = ({ onConfirm, onCancel }: ConfirmationDialogProps) =>
  confirm({
    title: "Do you want to approve this activity and all its session(s)?",
    content: "Please make sure that you have read through all the details as the sessions will be live upon approved.",
    okText: "Yes, approve",
    onOk() {
      onConfirm()
    },
    onCancel() {
      onCancel()
    },
    okButtonProps:{
      loading: true,
      style: {
        background: "#45BE93",
        border: "1px solid #45BE93",
        paddingInline: 10,
        width: 145,
        height: 33
      }
    }
  })


function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const cancelButtonProps = {
    minWidth: "126px",
    padding: "8px 32px",
    height: "33px",
    lineHeight: "0px",
    margin: "auto",
    position: "relative",
    background: "#45BE93",
    border: "none"
  }

  const showModalWithIcon = () => {
    confirm({
      title: "Do you want to approve this activity and all its session(s)?",
      icon: <ExclamationCircleOutlined/>,
      content: (<div>Please make sure that you have read through all the details as the sessions will be live upon approved.</div>),
      okText: null
    })
  }

  const onModalOk = () => {
    setModalVisible(false);
  };

  const onModalCancel = () => {
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
        <Button type="primary" onClick={ () => ShowConfirmationDialog(onModalOk, onModalCancel) }>Another Approve Activity</Button>
      </header>
      <ConfirmApproveActivityModal
        modalVisible={ modalVisible }
        onConfirm={ () => onModalOk() }
        onCancel={ () => onModalCancel() }/>
    </div>
  );
}

export default App;
