import React, { useState } from 'react';
// import './Chatbot.css';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = () => {
    if (userInput === '') return;

    const newMessage = {
      user: true,
      message: userInput,
    };

    setChatHistory([...chatHistory, newMessage]);
    setUserInput('');

    // Simulate a delayed response from the chatbot
    setTimeout(() => {
      const chatbotResponse = {
        user: false,
        message: 'Chatbot response: ' + userInput,
      };

      setChatHistory([...chatHistory, chatbotResponse]);
    }, 1000);
  };

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="chatbot-container">
      <div className="chat-title">
        <h2>Ask anything</h2>
      </div>

      <div className="chatbot-input">
        <input type="text" value={userInput} onChange={handleChange} placeholder="Enter your message" />
        <button onClick={handleSubmit}>Send</button>
      </div>
      <div className="dsclmr">You may found that chat is not working as it's in underprogress!</div>
    </div>
  );
};

export default Chatbot;
