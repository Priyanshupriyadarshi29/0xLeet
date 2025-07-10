# 0xLeet 🧠 – AI-Powered Chrome Extension for LeetCode

**0xLeet** is a personal project – a smart Chrome Extension that helps you solve LeetCode problems by integrating AI directly into your browser. It reads the active problem and gives instant explanations, hints, and code guidance using the Gemini API.

---

## 🚀 Features

- 🔍 Detects current LeetCode problem from the URL
- 🤖 Sends the problem title to a custom backend with Gemini AI
- 💬 Displays AI-generated solutions and hints in a simple chat interface
- ⚡ Fast and lightweight – works across all LeetCode pages

---

## 🛠 Tech Stack

- **Chrome Extension:** HTML, CSS, JavaScript
- **Backend:** Node.js + Express
- **AI Integration:** Gemini API (Google's Generative AI)
- **Browser APIs:** Chrome Extension APIs

---

## 📦 How to Use

### 1. Clone the project
```bash
1. git clone https://github.com/Priyanshupriyadarshi29/0xLeet.git
2. Load the extension
Open Chrome and go to chrome://extensions

Enable Developer mode

Click Load unpacked

Select the extension folder from this project

3. Start the backend server
Navigate to the backend directory

Install dependencies:

bash
npm install
edit .env file and add your Gemini API key:
GEMINI_API_KEY=your-api-key

Start the server:

📎 Project Structure
0xLeet/
├── extension/        # Chrome extension files
├── server.js         # Express backend
├── .env              # API key (not committed)
├── package.json      # Node.js dependencies
└── README.md
👨‍💻 About the Author
Priyanshu Priyadarshi
MERN Stack Developer | Data Analyst | NIT Rourkela '26


I enjoy building tools that combine automation, web tech, and AI to solve real-world problems.



🔗 Linkdin | www.linkedin.com/in/priyanshu-priyadarshi-075673309



This extension was created as a personal project to experiment with AI integration in developer workflows.
