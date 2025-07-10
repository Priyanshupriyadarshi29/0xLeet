(function() {
    if (document.getElementById('chrome-ext-chatbot')) return;
    

    const currentURL = window.location.href;
    let thisproblem = 'this problem';
    const firstautomatedmessage = currentURL.split("/").filter(Boolean).pop(); 
    if (firstautomatedmessage && firstautomatedmessage !== 'problems') {
      const parts = currentURL.split('/');
      const slug = parts[parts.indexOf("problems") + 1]; 
      thisproblem = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    }

  
    // chatbot container
    const container = document.createElement('div');
    container.id = 'chrome-ext-chatbot';
    container.style.position = 'fixed';
    container.style.right = '24px';
    container.style.bottom = '24px';
    container.style.zIndex = '999999';
    container.style.fontFamily = 'sans-serif';

    // Chatbot minimized
    const bubble = document.createElement('div');
    bubble.id = 'chrome-ext-chatbot-bubble';
    bubble.style.width = '60px';
    bubble.style.height = '60px';
    bubble.style.background = 'linear-gradient(135deg, #4f8cff, #2355d6)';
    bubble.style.borderRadius = '50%';
    bubble.style.display = 'flex';
    bubble.style.alignItems = 'center';
    bubble.style.justifyContent = 'center';
    bubble.style.boxShadow = '0 4px 16px rgba(0,0,0,0.18)';
    bubble.style.cursor = 'pointer';
    bubble.style.transition = 'box-shadow 0.2s';
    bubble.title = 'Open chatbot';
    bubble.innerHTML = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';

    // Chatbot expanded
    const chatWindow = document.createElement('div');
    chatWindow.id = 'chrome-ext-chatbot-window';
    chatWindow.style.width = '340px';
    chatWindow.style.height = '420px';
    chatWindow.style.background = 'rgba(44, 33, 16, 0.15)';
    chatWindow.style.borderRadius = '5px';
    chatWindow.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'; 
    chatWindow.style.display = 'none';
    chatWindow.style.flexDirection = 'column';
    chatWindow.style.overflow = 'hidden';
    chatWindow.style.backdropFilter = 'blur(8px)'; 
    chatWindow.style.position = 'relative'; 
// const header=document.createElement('div');

// header.style.width = '340px';
// header.style.height = '20px';
// header.style.background = 'rgba(255, 255, 255, 0.15)';
// header.style.borderRadius = '5px';
// header.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'; 
// header.style.display = 'none';
// header.style.flexDirection = 'column';
// header.style.overflow = 'hidden';
// header.style.backdropFilter = 'blur(8px)'; 
// header.style.position = 'relative'; 


    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '8px';
    closeBtn.style.right = '8px';
    // closeBtn.style.background = 'rgba(255, 255, 255, 0.2)';
    closeBtn.style.border = 'none';
    closeBtn.style.borderRadius = '50%';
    closeBtn.style.width = '24px';
    closeBtn.style.height = '24px';
    closeBtn.style.color = '#fff';
    closeBtn.style.fontSize = '18px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.display = 'flex';
    closeBtn.style.alignItems = 'center';
    closeBtn.style.justifyContent = 'center';
    closeBtn.style.zIndex = '1000';
    closeBtn.title = 'Close chat';
    closeBtn.onclick = () => {
      chatWindow.style.display = 'none';
      bubble.style.display = 'flex';
    };

    // Messages area
    const messages = document.createElement('div');
    messages.id = 'chrome-ext-chatbot-messages';
    messages.style.flex = '1';
    messages.style.padding = '16px';
    messages.style.paddingTop = '40px'; 
    messages.style.overflowY = 'auto';
    messages.style.background = 'transparent';
    
    const firstmessage = `Do you need help in ${thisproblem}? if yes the type 'yes'`;
    messages.innerHTML = `<div style="color:#888;text-align:center;margin-top:40px;">${firstmessage}</div>`;
    
    // Input area
    const inputArea = document.createElement('div');
    inputArea.style.display = 'flex';
    inputArea.style.padding = '12px 16px';
    inputArea.style.background = 'rgba(240, 242, 245, 0.3)'; 
    inputArea.style.borderTop = 'none';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type your message...';
    input.style.flex = '1';
    input.style.padding = '10px';
    input.style.border = '1px solid #d1d5db';
    input.style.borderRadius = '12px';
    input.style.fontSize = '15px';
    input.style.outline = 'none';

    const sendBtn = document.createElement('button');
    sendBtn.textContent = 'Send';
    sendBtn.style.marginLeft = '8px';
    sendBtn.style.background = '#2C2110';
    sendBtn.style.color = '#FF9F16';
    sendBtn.style.border = 'none';
    sendBtn.style.borderRadius = '8px';
    sendBtn.style.padding = '0 18px';
    sendBtn.style.fontSize = '15px';
    sendBtn.style.cursor = 'pointer';
    

    inputArea.appendChild(input);
    inputArea.appendChild(sendBtn);

    // Assemble chat window 
    
    chatWindow.appendChild(closeBtn);
    chatWindow.appendChild(messages);
    chatWindow.appendChild(inputArea);

    // Show chat window on bubble click
    bubble.onclick = () => {
      chatWindow.style.display = 'flex';
      bubble.style.display = 'none';
      input.focus();
    };
    
   


    function appendMessage(sender, text) {
      const msgDiv = document.createElement('div');
      msgDiv.style.margin = '8px 0';
      msgDiv.style.display = 'flex';
      msgDiv.style.flexDirection = sender === 'user' ? 'row-reverse' : 'row';
      msgDiv.innerHTML = `<div style="max-width: 70%; padding: 10px 14px; border-radius: 16px; background: ${sender === 'user' ? '#2C2110' : '#e3e7ed'}; color: ${sender === 'user' ? '#FF9F16' : '#2C2110'}; font-size: 15px;">${text}</div>`;
      messages.appendChild(msgDiv);
      messages.scrollTop = messages.scrollHeight;
    }

    async function sendMessage() {
      const userMsg = input.value.trim();
      if (!userMsg) return;
      
      // Remove placeholder if first message
      const firstmessage = `Do you need help in ${thisproblem}? if yes the type 'yes'`;
      const isFirstMessage = messages.innerText.includes(firstmessage);
      
      if (isFirstMessage) messages.innerHTML = '';
      appendMessage('user', userMsg);
      input.value = '';

      // If user says "yes" to the first message, automatically ask for help
      if (isFirstMessage && userMsg.toLowerCase().includes('yes')) {
        const typingDiv = document.createElement('div');
        typingDiv.id = 'bot-typing';
        typingDiv.style.margin = '8px 0';
        typingDiv.style.color = '#888';
        typingDiv.textContent = 'Bot is typing...';
        messages.appendChild(typingDiv);
        messages.scrollTop = messages.scrollHeight;

        const helpMessage = `I need help in ${thisproblem} from LeetCode. Can you provide me with guidance, hints, or a solution approach?`;

        try {
          const response = await fetch('http://localhost:3001/api/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              message: helpMessage
            })
          });

          const data = await response.json();
          typingDiv.remove();

          if (data.success && data.message) {
            appendMessage('bot', data.message);
          } else {
            appendMessage('bot', data.error || "Sorry, I couldn't get a response from the server.");
          }
        } catch (error) {
          typingDiv.remove();
          appendMessage('bot', "Sorry, there was an error connecting to the server. Make sure the backend is running.");
        }
        return;
      }

      // Show typing indicator for normal messages
      const typingDiv = document.createElement('div');
      typingDiv.id = 'bot-typing';
      typingDiv.style.margin = '8px 0';
      typingDiv.style.color = '#888';
      typingDiv.textContent = 'Bot is typing...';
      messages.appendChild(typingDiv);
      messages.scrollTop = messages.scrollHeight;

      try {
        const response = await fetch('http://localhost:3001/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: userMsg
          })
        });

        const data = await response.json();
        typingDiv.remove();

        if (data.success && data.message) {
          appendMessage('bot', data.message);
        } else {
          appendMessage('bot', data.error || "Sorry, I couldn't get a response from the server.");
        }
      } catch (error) {
        typingDiv.remove();
        appendMessage('bot', "Sorry, there was an error connecting to the server. Make sure the backend is running.");
      }
    }

    sendBtn.onclick = sendMessage;
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') sendMessage();
    });

    // Add to DOM
    container.appendChild(bubble);
    container.appendChild(chatWindow);
    document.body.appendChild(container);

    
})(); 
