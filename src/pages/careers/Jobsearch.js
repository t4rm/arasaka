import React, { useState } from 'react';
import "../../css/jobsearch.css"
import axios from "axios";

function Careers() {
  const [prompt, setPrompt] = useState("");
  // const [response, setResponse] = useState("");
  const [messages, setMessages] = useState([]);

  const HTTP = "http://localhost:8080/v1/chat/completions";

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessages = [...messages, { role: 'user', content: prompt }];


    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        // setResponse(res.data);
        console.log(prompt);
        console.log(res.data);
        newMessages.push({ role: 'ai', content: res.data });
        setMessages(newMessages);
      })
      .catch((error) => {
        console.error(error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  const renderMessages = () => {
    return messages.map((msg, index) => (
      <li key={index}>
        {msg.role === 'user' ? 'You' : 'ARASAKA\'S JOB AI'}:<br />- {msg.content}
      </li>
    ));
  };

  return (
    <main className='jobsearch-container'>
      <div className='ai-container'>
        <div className='ai-avatar-container'>

        </div>
        <div className='ai-chatbox'>
          <ul id='ai-chatbox-content'>
            {renderMessages()}
          </ul>
        </div>
        <form className='ai-input' onSubmit={handleSubmit}>
          <input type='text' className='ai-input-text' placeholder='Describe yourself or tell us what you are looking for.' value={prompt} onChange={handlePrompt} />
        </form>
      </div>
    </main>
  );
}

export default Careers;