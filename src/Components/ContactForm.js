import React, { useState } from 'react'
import axios from 'axios'
import Button from './Button';

const ContactForm = () => {

  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [msgSend, setMsgSend] = useState(false)

  const maxContentLength = 350
  const PATH = "http://127.0.0.1/index.php";

  const  formSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    if(email.length<=0 || !email.includes("@")){
      setErrorMsg("Proszę wpisać poprawny adres email");
      setMsgSend(false);
      setLoading(false)
      return;
    }

    if(topic.length<=0){
      setErrorMsg("Proszę wpisać temat wiadomości")
      setMsgSend(false);
      setLoading(false)
      return;
    }

    if(content.length<=0){
      setErrorMsg("Proszę wpisać treść wiadomości")
      setMsgSend(false);
      setLoading(false)
      return;
    }

    try {
      const {data} = await axios({
        method: 'post',
        url: `${PATH}`,
        headers: { 'content-type': 'application/json' },
        data: {email, topic, content}
      })
      
      console.log(data);
      if(!data.status){
        throw "Wystąpił błąd komunikacji z serwerem"
      }
      setMsgSend(data.status);
      setLoading(false)
      setErrorMsg("");

    } catch (error) {
      setErrorMsg("Wystąpił błąd, spróbuj ponownie poźniej")
      setLoading(false)
    }
  }

  return (
    <form onSubmit={formSubmit} method="post">
      <input type="text" id="email" name="email" placeholder="Adres e-mail" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input type="text" id="topic" name="topic" placeholder="Temat" maxLength="55" value={topic} onChange={(e) => setTopic(e.target.value)}></input>
      <div className="textArea">
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
      </div>
      
      
      <span className="error-msg">{errorMsg}</span>
      {loading && <span className="loading-screen">Loading</span>}
      {msgSend ? <span className="success-msg" style={{color: "#52CC2D"}}>Wiadomość wysłana</span> : <button type="submit">Wyślij</button>}
    </form>
  )
}

export default ContactForm
