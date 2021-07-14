import React, { useState, useRef } from 'react'
import axios from 'axios'

const ContactForm = () => {

  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState('')
  const [msgSend, setMsgSend] = useState(false)

  const maxContentLength = 350
  const PATH = "http://127.0.0.1/index.php";

  const  formSubmit = async (e) => {
    e.preventDefault();
    
    if(email.length<=0 || !email.includes("@")){
      setErrorMsg("Proszę wpisać poprawny adres email")
      return;
    }

    if(topic.length<=0){
      setErrorMsg("Proszę wpisać temat wiadomości")
      return;
    }

    if(content.length<=0){
      setErrorMsg("Proszę wpisać treść wiadomości")
      return;
    }

    try {
      const { data } = await axios({
        method: 'post',
        url: `${PATH}`,
        headers: { 'content-type': 'application/json' },
        data: {email, topic, content}
      })
      
      console.log(data);
      setMsgSend(true);
      setErrorMsg("Wiadomość wysłana");

    } catch (error) {
      setErrorMsg("Wystąpił błąd, spróbuj ponownie poźniej")
    }
  }

  return (
    <form onSubmit={formSubmit} method="post">
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
      
      <span className="error-msg" style={{color: msgSend ? "#52CC2D" : "#CC8719"}}>{errorMsg}</span>

      <button type="submit">Wyślij</button>
    </form>
  )
}

export default ContactForm
