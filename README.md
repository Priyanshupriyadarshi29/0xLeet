# 0xLeet - AI Assistant for LeetCode

0xLeet is a **Chrome Extension** that integrates **AI assistance** directly into **LeetCode**.  
It helps users by providing problem hints, explanations, and code suggestions without leaving the coding interface.

---

## 🚀 Features
- 🤖 Inline AI Assistant for coding problems  
- ⚡ Responsive, interactive UI  
- 📝 Works directly inside LeetCode’s editor  
- 🎯 Easy setup and usage  

---

## 🛠️ Tech Stack & 📂 Project Structure
```bash
Tech Stack:
- Frontend:  HTML, CSS, JavaScript
- Backend:   Node.js, Express.js
- AI:        Google Gemini API

Project Structure:
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
