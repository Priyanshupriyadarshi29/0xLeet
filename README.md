
# 0xLeet Chrome Extension with Backend Server

This project consists of a Chrome extension that communicates with a Node.js backend server to provide AI-powered chat functionality using Google's Gemini API.

## Project Structure

```
0xLeet/
├── server.js          # Node.js backend server
├── package.json       # Backend dependencies
├── env.example        # Environment variables template
├── manifest.json      # Chrome extension manifest
├── content.js         # Chrome extension content script
├── popup.html         # Extension popup (no longer needed)
├── popup.js           # Extension popup script (no longer needed)
└── icons/             # Extension icons
```

## Setup Instructions

### 1. Backend Server Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   ```bash
   cp env.example .env
   ```

3. **Add your Gemini API key to .env:**
   ```
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   PORT=3000
   ```

4. **Start the server:**
   ```bash
   npm start
   # or for development with auto-restart:
   npm run dev
   ```

5. **Verify server is running:**
   Visit `http://localhost:3000/api/health` in your browser

### 2. Chrome Extension Setup

1. **Load the extension in Chrome:**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the extension folder

2. **Test the extension:**
   - Go to any LeetCode problem page
   - Click the extension icon to open the chat
   - Start chatting with the AI

## API Endpoints

### POST /api/chat
Send a message to the AI and get a response.

**Request:**
```json
{
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "AI response here"
}
```

### GET /api/health
Check if the server is running.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Security Features

- ✅ API key stored securely on backend server
- ✅ CORS enabled for Chrome extension communication
- ✅ Error handling and validation
- ✅ No sensitive data exposed in frontend

## Development

- **Backend:** Node.js with Express
- **Frontend:** Chrome Extension (Vanilla JavaScript)
- **AI:** Google Generative AI (Gemini Pro)
- **Environment:** dotenv for configuration

## Troubleshooting

1. **Server not starting:** Check if port 3000 is available
2. **Extension not working:** Ensure backend server is running
3. **API errors:** Verify your Gemini API key is correct
4. **CORS errors:** Check that CORS is properly configured

## Notes

- The extension now communicates with your local backend server
- No need to enter API keys in the extension popup anymore
- The backend handles all API calls securely
- Make sure the backend server is running before using the extension 
=======
# 0xLeet

