(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        #safqore-chat-wrapper {
          position: relative;
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.4;
        }
    
        /* Chat bubble */
        #safqore-chat-wrapper .chat-bubble {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #4A5EE5;
          color: #fff;
          padding: 12px 16px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 0.9rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          z-index: 9999;
          transition: background 0.3s ease;
        }
    
        #safqore-chat-wrapper .chat-bubble:hover {
          background: #3a4eca;
        }
    
        #safqore-chat-wrapper .chat-bubble .icon {
          margin-right: 8px;
        }
    
        /* Chat window */
        #safqore-chat-wrapper .chat-window {
          position: fixed;
          bottom: 80px;
          right: 10px;
          width: 95%;
          max-width: 400px;
          min-width: 280px;
          height: 70%;
          max-height: 700px;
          min-height: 400px;
          background: #fff;
          border: none;
          border-radius: 10px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
          display: none;
          flex-direction: column;
          z-index: 9999;
          overflow: hidden;
          font-size: 0.9rem;
          color: #333;
          font-family: "Helvetica Neue", Arial, sans-serif;
        }
    
        #safqore-chat-wrapper .chat-window.open {
          display: flex;
        }
    
        /* Header with gradient background */
        #safqore-chat-wrapper .chat-header {
          background: linear-gradient(45deg, #4A5EE5, #D53EF5);
          color: #fff;
          padding: 16px;
          position: relative;
        }
    
        #safqore-chat-wrapper .chat-header .header-text h2 {
          margin: 0 0 4px 0;
          font-size: 1.1rem;
          font-weight: normal;
        }
    
        #safqore-chat-wrapper .chat-header .header-text p {
          margin: 0;
          font-size: 0.85rem;
        }
    
        #safqore-chat-wrapper .close-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 1.4rem;
          cursor: pointer;
        }
    
        #safqore-chat-wrapper .chat-body {
          flex: 1;
          padding: 10px;
          overflow-y: auto;
          background: #fff;
        }
    
        #safqore-chat-wrapper .chat-message {
          margin-bottom: 12px;
          line-height: 1.4;
        }
    
        #safqore-chat-wrapper .chat-message span {
          display: inline-block;
          padding: 10px 12px;
          border-radius: 12px;
          background: #f0f0f0;
          color: #333;
          font-size: 0.9rem;
        }
    
        #safqore-chat-wrapper .chat-message.user span {
          background: #4A5EE5;
          color: #fff;
        }
    
        #safqore-chat-wrapper .chat-footer {
          padding: 10px;
          background: #fff;
          border-top: 1px solid #eee;
          display: flex;
          flex-direction: column;
          gap: 6px;
          position: relative;
        }
    
        #safqore-chat-wrapper .input-row {
          display: flex;
          align-items: center;
          background: #f9f9f9;
          border-radius: 20px;
          padding: 4px;
          border: 1px solid #ddd;
        }
    
        #safqore-chat-wrapper .chat-input {
          flex: 1;
          border: none;
          background: transparent;
          outline: none;
          padding: 8px;
          font-size: 0.9rem;
        }
    
        #safqore-chat-wrapper .send-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          color: #666;
          font-size: 1.1rem;
          width: 32px;
          height: 32px;
          text-align: center;
          line-height: 32px;
          padding: 0;
          border-radius: 50%;
          transition: background 0.2s ease;
        }
    
        #safqore-chat-wrapper .send-btn:hover {
          background: #eee;
        }
    
        @media (max-width: 600px) {
          #safqore-chat-wrapper .chat-window {
            width: 90%;
            height: 60%;
            right: 5%;
            bottom: 30px;
          }
        }
    `;
    document.head.appendChild(style);
  
    const wrapper = document.createElement('div');
    wrapper.id = 'safqore-chat-wrapper';
    wrapper.innerHTML = `
      <div class="chat-bubble" id="chat-bubble">
        <span class="icon">💬</span> Grant Application Questions? Let’s Chat!
      </div>
      <div class="chat-window" id="chat-window">
        <div class="chat-header">
          <div class="header-text">
            <h2>Welcome to Safqore AI ✨</h2>
            <p>RSTMH Grants Agent (Demo)</p>
          </div>
          <button id="close-chat" class="close-btn">&times;</button>
        </div>
        <div class="chat-body">
          <div class="chat-message bot">
            <span>What can I answer for you?</span>
          </div>
        </div>
        <div class="chat-footer">
          <div class="typing-indicator" id="typing-indicator" style="display: none;">
            <div>Agent is typing</div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <div class="input-row">
            <input type="text" placeholder="Send a message..." class="chat-input"/>
            <button class="send-btn" title="Send">➤</button>
          </div>
          <div class="powered-by">Powered By Safqore AI</div>
        </div>
      </div>
    `;
    document.body.appendChild(wrapper);
  
    const chatBubble = wrapper.querySelector('#chat-bubble');
    const chatWindow = wrapper.querySelector('#chat-window');
    const closeChat = wrapper.querySelector('#close-chat');
    const sendBtn = wrapper.querySelector('.send-btn');
    const chatInput = wrapper.querySelector('.chat-input');
    const chatBody = wrapper.querySelector('.chat-body');
    const typingIndicator = wrapper.querySelector('#typing-indicator');
  
    chatBubble.addEventListener('click', () => {
      chatWindow.classList.toggle('open');
    });
  
    closeChat.addEventListener('click', () => {
      chatWindow.classList.remove('open');
    });
  
    async function handleUserMessage(userMsg) {
      // Display user's message
      const userMsgElem = document.createElement('div');
      userMsgElem.className = 'chat-message user';
      userMsgElem.innerHTML = `<span>${userMsg}</span>`;
      chatBody.appendChild(userMsgElem);
      chatBody.scrollTop = chatBody.scrollHeight;
  
      // Show typing indicator
      typingIndicator.style.display = 'flex';
  
      // Simulate getting LLM response
      const botReply = await window.getLLMResponse(userMsg);
  
      // Hide typing indicator
      typingIndicator.style.display = 'none';
  
      // Display bot response
      const botMsgElem = document.createElement('div');
      botMsgElem.className = 'chat-message bot';
      botMsgElem.innerHTML = `<span>${botReply}</span>`;
      chatBody.appendChild(botMsgElem);
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  
    chatInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const userMsg = chatInput.value.trim();
        if (!userMsg) return;
        chatInput.value = '';
        handleUserMessage(userMsg);
      }
    });
  
    sendBtn.addEventListener('click', () => {
      const userMsg = chatInput.value.trim();
      if (!userMsg) return;
      chatInput.value = '';
      handleUserMessage(userMsg);
    });
  })();
  