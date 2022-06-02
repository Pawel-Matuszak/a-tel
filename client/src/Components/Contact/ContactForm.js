import React, { useState, useRef } from "react";
import axios from "axios";
import Button from "../Button/Button";
import ReCAPTCHA from "react-google-recaptcha";

require("dotenv").config({ path: "./../../../.env" });

const ContactForm = () => {
  const maxContentLength = 350;
  const maxTopicLength = 55;
  const PATH = "http://localhost:8000/";

  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgSend, setMsgSend] = useState(false);

  const recaptchaRef = useRef();

  const onChange = (value) => {
    setLoading(true);
  };

  const onErrored = () => {
    console.log("Connection with reCaptcha server failed!");
  };

  const onExpired = () => {
    console.log("reCaptcha expired!");
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    await recaptchaRef.current.executeAsync();

    if (email.length <= 0 || !email.includes("@")) {
      setErrorMsg("Proszę wpisać poprawny adres email");
      setMsgSend(false);
      setLoading(false);
      return;
    }

    if (topic.length <= 0 || topic.length > maxTopicLength) {
      setErrorMsg("Proszę wpisać temat wiadomości");
      setMsgSend(false);
      setLoading(false);
      return;
    }

    if (content.length <= 0 || content.length > maxContentLength) {
      setErrorMsg("Proszę wpisać treść wiadomości");
      setMsgSend(false);
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios({
        method: "post",
        url: `${PATH}`,
        headers: { "content-type": "application/json" },
        data: { email, topic, content },
      });

      if (!data.status) {
        throw Object.assign(new Error("Wystąpił błąd komunikacji z serwerem"), {
          code: 402,
        });
      }
      setMsgSend(data.status);
      setLoading(false);
      setErrorMsg("");
    } catch (error) {
      setErrorMsg("Wystąpił błąd, spróbuj ponownie poźniej");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={formSubmit} method="post">
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Adres e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="text"
        id="topic"
        name="topic"
        placeholder="Temat"
        maxLength={maxTopicLength}
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      ></input>
      <div className="textArea">
        <textarea
          id="content"
          name="content"
          maxLength={maxContentLength}
          placeholder="Treść wiadomości"
          cols="50"
          rows="9"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setCharacterCount(e.target.value.length);
          }}
        ></textarea>
        <span className="charCount">
          {characterCount}/{maxContentLength}
        </span>
      </div>

      <span className="error-msg">{errorMsg}</span>
      {loading && (
        <span className="loading-screen">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </span>
      )}
      {msgSend ? (
        <span className="success-msg" style={{ color: "#52CC2D" }}>
          Wiadomość wysłana
        </span>
      ) : (
        <>
          <Button type="submit" content={"Wyślij"} link="#" />
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.REACT_APP_CAPTCHA_PUBLIC_KEY}
            onChange={onChange}
            onErrored={onErrored}
            onExpired={onExpired}
          />
        </>
      )}
    </form>
  );
};

export default ContactForm;
