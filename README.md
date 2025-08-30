# <span style="color:#00FF00;">0xLeet - AI Assistant for LeetCode</span>

0xLeet is a <span style="color:#00BFFF;">Chrome Extension</span> that integrates  
<span style="color:#FFD700;">AI assistance</span> directly into <span style="color:#FF6347;">LeetCode</span>.  
It helps users by providing problem hints, explanations, and code suggestions without leaving the coding interface.

---

## 🚀 <span style="color:#FF4500;">Features</span>
- <span style="color:#32CD32;">Inline AI Assistant</span> for coding problems  
- <span style="color:#1E90FF;">Responsive, interactive UI</span>  
- Works directly inside <span style="color:#FF6347;">LeetCode’s editor</span>  
- <span style="color:#FFD700;">Easy setup and usage</span>  

---

## 📸 <span style="color:#FF1493;">Screenshots</span>

### Assistant Active
![Assistant Active](./screenshots/Screenshot1.png)

### Problem with Assistant Sidebar
![Problem with Assistant Sidebar](./screenshots/Screenshot2.png)

### Chatbox for Help
![Chatbox for Help](./screenshots/Screenshot3.png)

---

## ⚙️ <span style="color:#8A2BE2;">Installation & Setup</span>
```bash
# 1. Clone the repo
git clone https://github.com/Priyanshupriyadarshi29/0xLeet.git

# 2. Open Chrome extensions page
chrome://extensions/

# 3. Enable Developer Mode

# 4. Load unpacked and select the project folder

# 5. The extension is ready to use 🚀

## 🛠️ Tech Stack
```bash
Frontend:  HTML, CSS, JavaScript
Backend:   Node.js, Express.js
AI:        Google Gemini API

0xLeet/
│── manifest.json        # Chrome Extension config
│── background.js        # Background service worker
│── content.js           # Injected script for LeetCode page
│── popup.html           # Popup UI
│── popup.js             # Logic for popup UI
│── styles.css           # Styles for assistant UI
│── assets/              # Icons, images
│── server/              # Backend (Node.js + Express + Gemini API)
│── package.json         # Dependencies & scripts
│── README.md            # Project documentation

