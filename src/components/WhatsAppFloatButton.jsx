
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import DP from "../assets/dp.jpg";

const WhatsAppFloatButton = () => {
    const [open, setOpen] = useState(false);
    const [firstOpen, setFirstOpen] = useState(true);
    const chatContentRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!open) setOpen(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (open && firstOpen) {
            setTimeout(() => {
                const typingDiv = document.createElement("div");
                typingDiv.className = "typing-indicator";
                typingDiv.innerHTML = "<span></span><span></span><span></span>";
                chatContentRef.current.appendChild(typingDiv);
                chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;

                setTimeout(() => {
                    typingDiv.remove();
                    const message = document.createElement("div");
                    message.className = "message received";
                    message.textContent =
                        "Hi there, I'm Muhammad Maaz, and this is my sales pitch for innovative digital solution that transform your business productivity.";
                    chatContentRef.current.appendChild(message);
                    chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
                }, 3000);
            }, 1000);
            setFirstOpen(false);
        }
    }, [open]);

    return (
        <Wrapper>
            <div className="chat-header" style={{ display: open ? 'flex' : 'none' }}>
                <div className="avatar-container">
                    <img
                        src={DP}
                        alt="Avatar"
                    />
                    <div className="online-dot"></div>
                </div>
                <div className="chat-header-info">
                    <h1>Muhammad Maaz</h1>
                    <div style={{ color: '#eeeeee' }}>online</div>
                </div>
                <button className="close-btn" onClick={() => setOpen(false)}>
                    &times; 
                </button>
            </div>

            <div
                className="chat-content"
                ref={chatContentRef}
                style={{ display: open ? 'block' : 'none' }}
            ></div>

            <div
                className="message-input"
                style={{ display: open ? 'flex' : 'none' }}
            >
                <button
                    className="whatsapp-btn"
                    onClick={() =>
                        window.open(
                            'https://api.whatsapp.com/send?phone=923465090004&text=Hello%20Muhammad%20Maaz',
                            '_blank'
                        )
                    }
                >
                    Chat in WhatsApp
                </button>
            </div>

            {!open && (
                <div className="chat-icon" onClick={() => setOpen(true)}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                    />
                </div>
            )}
        </Wrapper>
    );
};

export default WhatsAppFloatButton;

const Wrapper = styled.div`
.chat-header,
.chat-content,
.message-input {
  position: fixed;
  right: 20px;
  width: 300px;
  background-color: #e5ddd5;
  z-index: 10002;
  opacity: 1;
  transition: all 0.5s;
}

.chat-header {
  top: calc(100% - 420px);
  height: 60px;
  background-color: #075e54;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 12px 12px 0 0;
}

.avatar-container {
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.chat-header img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.online-dot {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  background-color: #25d366;
  border-radius: 50%;
  border: 2px solid #075e54;
}

.chat-header-info {
  flex-grow: 1;
}

.chat-header h1 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 0px;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
}

.chat-content {
  top: calc(100% - 360px);
  height: 300px;
  padding: 20px;
  overflow-y: auto;
}

.message {
  max-width: 80%;
  padding: 8px 12px;
  margin-bottom: 10px;
  border-radius: 7.5px;
  word-wrap: break-word;
}

.message.received {
  background-color: #ffffff;
  align-self: flex-start;
}

.message-input {
  bottom: 20px;
  height: 60px;
  display: flex;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 0 0 12px 12px;
}

.whatsapp-btn {
  background-color: #25d366;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 12px;
  width: 100%;
  cursor: pointer;
}

.chat-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: wave 2s infinite;
  z-index: 10001;
}

.chat-icon img {
  width: 35px;
  height: 35px;
}

.typing-indicator {
  background-color: #e5ddd5;
  padding: 10px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 10px;
}

.typing-indicator span {
  height: 10px;
  width: 10px;
  float: left;
  margin: 0 1px;
  background-color: #9e9ea1;
  display: block;
  border-radius: 50%;
  opacity: 0.4;
}

.typing-indicator span:nth-of-type(1) {
  animation: blink 1s infinite 0.3333s;
}
.typing-indicator span:nth-of-type(2) {
  animation: blink 1s infinite 0.6666s;
}
.typing-indicator span:nth-of-type(3) {
  animation: blink 1s infinite 0.9999s;
}

@keyframes blink {
  50% {
    opacity: 1;
  }
}

@keyframes wave {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

`;