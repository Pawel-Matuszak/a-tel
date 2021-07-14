import React, { useState } from 'react'

const ContactForm = () => {

  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const maxContentLength = 350

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <form>
      <input type="text" id="email" name="email" placeholder="Adres e-mail" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input type="text" id="topic" name="topic" placeholder="Temat" value={topic} onChange={(e) => setTopic(e.target.value)}></input>
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

      <button type="submit" onClick={sendEmail}>Wyślij</button>
    </form>
  )
}

export default ContactForm
