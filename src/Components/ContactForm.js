import React, { useState, useRef } from 'react'

const ContactForm = () => {

  const errorMsg = useRef(null)
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const maxContentLength = 350

  const sendEmail = (e) => {
    e.preventDefault();
    
    if(email.length<=0 || !email.includes("@")){
      errorMsg.current.innerHTML = "Proszę wpisać poprawny adres email"
      return;
    }

    if(topic.length<=0){
      errorMsg.current.innerHTML = "Proszę wpisać temat wiadomości"
      return;
    }

    if(content.length<=0){
      errorMsg.current.innerHTML = "Proszę wpisać treść wiadomości"
      return;
    }

    errorMsg.current.innerHTML = "";
    console.log({email, topic, content: content});
  }

  return (
    <form onSubmit={sendEmail}>
      <input type="text" id="email" name="email" placeholder="Adres e-mail" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input type="text" id="topic" name="topic" placeholder="Temat" maxLength="55" value={topic} onChange={(e) => setTopic(e.target.value)}></input>
      <textarea 
        id="content" 
        name="content" 
        maxLength={maxContentLength} 
        placeholder="Treść wiadomości" 
        cols="50" rows="9" 
        value={content} 
        onChange={(e) => {
          setContent(e.target.value)
          setCharacterCount(e.target.value.length)
        }}>
      </textarea>
      <span className="charCount">{characterCount}/{maxContentLength}</span>
      
      <span className="error-msg" ref={errorMsg}></span>

      <button type="submit">Wyślij</button>
    </form>
  )
}

export default ContactForm
