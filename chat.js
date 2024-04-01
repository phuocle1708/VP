const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

function sendMessage() {
  const messageText = messageInput.value.trim();
  if (messageText) {
    const chatHistory = document.getElementById("chat-history");
    const message = document.createElement("div");
    message.className = "message";
    const messageText = document.createElement("div");
    messageText.className = "message-text";
    messageText.textContent = messageText;
    message.appendChild(messageText);
    chatHistory.appendChild(message);
    messageInput.value = "";
  }
}

sendButton.addEventListener("click", sendMessage);

messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});
