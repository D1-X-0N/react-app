import './App.sass';
import {Message} from './components/Message/Message.js';
import {Form} from './components/Form/Form.js';
import React, { useEffect, useState } from "react";


function App() {
  const [messageList, setMessageList] = useState([]);

  const updateForm = (author, message) => {
    setMessageList((prevMessageList) => [...prevMessageList,{author: author, message: message}])
  }

  useEffect(() => {
    if(messageList.length != 0){  
      if(messageList[messageList.length - 1].author !== 'robot') {
        updateForm('robot', 'I am a robot')
      }
    }
  }, [messageList])

  return (
    <div className="container">
      <h1 className="header">Messenger</h1>
      <div className="App">
        <div className="message-list">
          {messageList.map(({author, message}) => (
            <Message author={author} message={message} />
          ))}
        </div>
        <Form onSubmit={updateForm} />
      </div>
    </div>
  );
}

export default App;